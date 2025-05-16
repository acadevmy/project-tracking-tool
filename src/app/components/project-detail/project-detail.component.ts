import { DatePipe } from '@angular/common';
import { Component, inject, input, numberAttribute } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProjectService } from '../../services/project.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  imports: [DatePipe, SectionHeaderComponent]
})
export class ProjectDetailComponent {
  private projectService = inject(ProjectService);

  id = input(0, { transform: numberAttribute });

  project = rxResource({
    request: () => this.id(),
    loader: ({ request: projectId }) => this.projectService.getBy(projectId)
  });
}
