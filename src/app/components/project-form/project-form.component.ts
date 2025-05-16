import { Component, computed, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  imports: [FormsModule]
})
export class ProjectFormComponent {
  project = input<Partial<Project>>({});
  newRecord = input(true);
  quickMode = input(false);

  submitted = output<Project>();

  buttonText = computed(() => {
    return this.newRecord() ? 'Crea Progetto' : 'Modifica Progetto';
  });

  private initialValue = computed(() => {
    return this.newRecord() ? {} : this.project();
  });

  onSubmit(form: NgForm): void {
    const project: Project = {
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
      ...form.value
    };

    form.resetForm(this.initialValue());
    this.submitted.emit(project);
  }
}
