import { DatePipe, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  imports: [NgClass, DatePipe]
})
export class ProjectListComponent {
  projects = input<Project[]>([]);

  selected = output<Project>();

  onSelect(project: Project): void {
    this.selected.emit(project);
  }
}
