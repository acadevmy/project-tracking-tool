import { Component } from '@angular/core';

import { ProjectContainerComponent } from './components/project-container/project-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProjectContainerComponent]
})
export class AppComponent {
  title = 'ng-tracking-tool';
}
