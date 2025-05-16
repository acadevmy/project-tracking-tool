import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { Project } from '../../models/project.model';
import { SearchProject } from '../../models/search-project.model';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { ProjectService } from '../../services/project.service';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectSearchComponent } from '../project-search/project-search.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
  imports: [
    SectionHeaderComponent,
    SearchFilterPipe,
    ProjectSearchComponent,
    ProjectListComponent,
    ProjectFormComponent
  ]
})
export class ProjectContainerComponent {
  private projectService = inject(ProjectService);
  private router = inject(Router);

  projects = rxResource({
    loader: () => this.projectService.getAll(),
    defaultValue: []
  });

  searchedProject = signal<SearchProject>({});
  selectedProject = signal<Project | undefined>(undefined);

  onSearchProject(project: SearchProject): void {
    this.searchedProject.set(project);
  }

  onSelectProject(project: Project): void {
    this.router.navigateByUrl(`/projects/detail/${project.id}`);
  }

  onSubmitProject(project: Project): void {
    this.projectService
      .add(project)
      .pipe(take(1))
      .subscribe(() => this.projects.reload());
  }
}
