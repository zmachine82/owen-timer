import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speechSynthesis: SpeechSynthesis;
  speechRecognition: SpeechSynthesisUtterance;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.speechRecognition = new SpeechSynthesisUtterance();
  }


  speak(textToSpeak: string) {
    this.speechRecognition.text = textToSpeak
    this.speechRecognition.voice = this.speechSynthesis.getVoices()[6]
    this.speechSynthesis.speak(this.speechRecognition);
  }
}
