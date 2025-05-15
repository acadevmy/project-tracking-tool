import { Component } from '@angular/core';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProjectComponent]
})
export class AppComponent {
  title = 'ng-tracking-tool';
}
