import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  constructor(public timerService: TimerService) {

  }



  onChange() {
    setTimeout(() => {
      this.timerService.saveToStorage()
    }, 0)
  }
}
