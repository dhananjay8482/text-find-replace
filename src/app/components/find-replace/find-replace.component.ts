import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-find-replace',
  standalone: false,
  
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.css'
})
export class FindReplaceComponent {
  text: string = '';
  findText: string = '';
  replaceText: string = '';
  caseSensitive: boolean = false; // New property for case sensitivity

  @Output() historyAdded = new EventEmitter<{ originalText: string; replacedText: string }>();

  findAndReplace(): void {
    if (this.findText.trim()) {
      const flags = this.caseSensitive ? 'g' : 'gi'; // Use case-insensitive flag if caseSensitive is false
      const replacedText = this.text.replace(new RegExp(this.findText, flags), this.replaceText);
      this.historyAdded.emit({ originalText: this.text, replacedText });
      this.text = replacedText;
    }
  }
}