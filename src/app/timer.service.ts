import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  totalReps: number;
  onCycleTime: number;
  offCycleTime: number;


  constructor() {
    const config = JSON.parse(localStorage.getItem('config') || '{"totalReps": 10, "onCycleTime": 30, "offCycleTime": 10}' )
    this.totalReps = config.totalReps;
    this.onCycleTime = config.onCycleTime;
    this.offCycleTime = config.offCycleTime;
  }


  resetToDefaults() {
    this.totalReps = 10;
    this.onCycleTime = 30;
    this.offCycleTime = 10;
    this.saveToStorage()
  }

  saveToStorage() {
    localStorage.setItem('config', JSON.stringify({totalReps: this.totalReps, onCycleTime: this.onCycleTime, offCycleTime: this.offCycleTime}))
  }
}
