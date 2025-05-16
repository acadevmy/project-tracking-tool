import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

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
  private route = inject(ActivatedRoute);

  project = toSignal(
    this.route.paramMap.pipe(
      map((params) => +(params.get('id') || 0)),
      switchMap((projectId) => this.projectService.getBy(projectId))
    )
  );
}
