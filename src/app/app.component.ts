import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  history: { originalText: string; replacedText: string }[] = [];

  addHistory(originalText: string, replacedText: string): void {
    this.history.push({ originalText, replacedText });
  }
}
