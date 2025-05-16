import { DatePipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProjectFormComponent } from '@project/components';
import { Project } from '@project/models';
import { ProjectService } from '@project/services';
import { SectionHeaderComponent } from '@shared/components';
import { take } from 'rxjs';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  imports: [DatePipe, SectionHeaderComponent, ProjectFormComponent]
})
export class ProjectDetailPageComponent {
  private projectService = inject(ProjectService);

  id = input.required<string>();

  project = rxResource({
    request: () => this.id(),
    loader: ({ request: projectId }) => this.projectService.getBy(projectId)
  });

  editMode = signal(false);

  changeMode(): void {
    this.editMode.update((value) => !value);
  }

  updateProject(project: Project): void {
    this.projectService
      .update(project)
      .pipe(take(1))
      .subscribe(() => {
        this.project.reload();
        this.changeMode();
      });
  }
}
