import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  ProjectFormComponent,
  ProjectListComponent,
  ProjectSearchComponent
} from '@project/components';
import { Project, SearchProject } from '@project/models';
import { SearchFilterPipe } from '@project/pipes';
import { ProjectService } from '@project/services';
import { SectionHeaderComponent } from '@shared/components';
import { take } from 'rxjs';

@Component({
  selector: 'app-project-overview-page',
  templateUrl: './project-overview-page.component.html',
  imports: [
    SectionHeaderComponent,
    SearchFilterPipe,
    ProjectSearchComponent,
    ProjectListComponent,
    ProjectFormComponent
  ]
})
export class ProjectOverviewPageComponent {
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
