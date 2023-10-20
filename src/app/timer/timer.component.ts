import { Component } from '@angular/core';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  currentRep = 1
  totalReps = 10
  onCycleTime = 30
  offCycleTime = 10
  currentRepTime = this.onCycleTime;
  currentlyOnTheOnCycle = true;
  interval?: NodeJS.Timeout;

  constructor(private speechService: SpeechService) {

  }

  startWorkout() {
    this.speechService.speak("Starting Now")
    this.interval = setInterval(() => {
      this.currentRepTime--
      if(this.currentRepTime < 0) {
        if(this.currentlyOnTheOnCycle) {
          this.currentRepTime = this.offCycleTime
          this.speechService.speak("Resting Now")
        } else {
          this.currentRepTime = this.onCycleTime

          if (this.currentRep >= this.totalReps){
            this.speechService.speak("All Done!")
            clearInterval(this.interval)
            return
          }
          this.speechService.speak("Starting Now")
          this.currentRep++
        }
        this.currentlyOnTheOnCycle = !this.currentlyOnTheOnCycle;

      }
    }, 1000)
  }

  pauseWorkout() {
    clearInterval(this.interval)
  }

  stopWorkout() {
    this.pauseWorkout();
    this.currentRepTime = this.onCycleTime;
    this.currentRep = 1
  }
}
