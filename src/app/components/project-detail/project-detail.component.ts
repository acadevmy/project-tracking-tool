import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { Project } from '../../models/project.model';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  imports: [DatePipe, SectionHeaderComponent]
})
export class ProjectDetailComponent {
  project = input.required<Project>();
}
