import { Component, inject, signal } from '@angular/core';

import { Project } from '../../models/project.model';
import { SearchProject } from '../../models/search-project.model';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { ProjectService } from '../../services/project.service';
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
  private projectService = inject(ProjectService);

  projects = this.projectService.projects;
  searchedProject = signal<SearchProject>({});
  selectedProject = signal<Project | undefined>(undefined);

  onSearchProject(project: SearchProject): void {
    this.searchedProject.set(project);
  }

  onSelectProject(project: Project): void {
    const found = this.projectService.getBy(project.id);

    this.selectedProject.set(found);
  }

  onSubmitProject(project: Project): void {
    this.projectService.add(project);
  }
}
