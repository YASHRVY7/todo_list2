import { Component } from '@angular/core';
import { NoteComponent } from '../modules/todo/component/note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
