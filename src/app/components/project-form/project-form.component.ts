import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  imports: [FormsModule]
})
export class ProjectFormComponent {
  nextId = input.required<number>();

  submitted = output<Project>();

  onSubmit(form: NgForm): void {
    const project: Project = {
      id: this.nextId(),
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
      ...form.value
    };

    form.resetForm();
    this.submitted.emit(project);
  }
}
