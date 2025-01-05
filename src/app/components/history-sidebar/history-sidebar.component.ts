import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-sidebar',
  standalone: false,
  
  templateUrl: './history-sidebar.component.html',
  styleUrl: './history-sidebar.component.css'
})
export class HistorySidebarComponent {

  @Input() history: { originalText: string; replacedText: string }[] = [];
}
