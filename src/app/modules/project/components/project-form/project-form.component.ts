import { Component, computed, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Project } from '@project/models';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
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
