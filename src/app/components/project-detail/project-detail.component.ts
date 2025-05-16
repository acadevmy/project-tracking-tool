import { DatePipe } from '@angular/common';
import {
  Component,
  inject,
  input,
  numberAttribute,
  signal
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  imports: [DatePipe, SectionHeaderComponent, ProjectFormComponent]
})
export class ProjectDetailComponent {
  private projectService = inject(ProjectService);

  id = input(0, { transform: numberAttribute });

  project = rxResource({
    request: () => this.id(),
    loader: ({ request: projectId }) => this.projectService.getBy(projectId)
  });

  editMode = signal(false);

  changeMode(): void {
    this.editMode.update((value) => !value);
  }

  updateProject(project: Project): void {
    this.projectService.update(project);
    this.changeMode();
  }
}
