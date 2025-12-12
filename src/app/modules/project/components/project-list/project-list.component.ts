import { DatePipe, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Project } from '@project/models';

import { LinkableDirective } from '../../directives/linkable.directive';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  imports: [NgClass, DatePipe, LinkableDirective]
})
export class ProjectListComponent {
  projects = input<Project[]>([]);

  selected = output<Project>();

  onSelect(project: Project): void {
    this.selected.emit(project);
  }
}
