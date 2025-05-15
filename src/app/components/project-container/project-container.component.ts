import { Component, signal } from '@angular/core';

import { Project } from '../../models/project.model';
import { SearchProject } from '../../models/search-project.model';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectSearchComponent } from '../project-search/project-search.component';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
  imports: [
    SearchFilterPipe,
    ProjectSearchComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent
  ]
})
export class ProjectContainerComponent {
  searchedProject = signal<SearchProject>({});
  selectedProject = signal<Project | undefined>(undefined);

  projects = signal<Project[]>([
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    }
  ]);

  onSearchProject(project: SearchProject): void {
    this.searchedProject.set(project);
  }

  onSelectProject(project: Project): void {
    this.selectedProject.set(project);
  }

  onSubmitProject(project: Project): void {
    this.projects.update((projects) => [project, ...projects]);
  }
}
