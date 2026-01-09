import { Component, signal } from '@angular/core';


interface Message{
  user:string;
  text:string;
  timestamp:Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
   messages: Message[] = [];
  inputText: string = '';
  userName: string = 'You';

  send() {
    const txt = this.inputText?.trim();
    if (!txt) return;
    this.messages.push({
      user: this.userName,
      text: txt,
      timestamp: new Date()
    });
    this.inputText = '';
    // after pushing — scroll to bottom if needed
    setTimeout(() => {
      const container = document.getElementById('chatMessages');
      if (container) container.scrollTop = container.scrollHeight;
    }, 50);
  }
}










