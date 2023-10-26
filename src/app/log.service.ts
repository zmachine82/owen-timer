import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: any[] = []

  constructor() {
    this.logs = JSON.parse(localStorage.getItem('logs') || '[]')
  }

  workoutCompleted(repsCompleted: number) {
    this.logs.push({
      completedTime: new Date(),
      reps:repsCompleted
    })

    localStorage.setItem('logs', JSON.stringify(this.logs))
  }
}

