import { Component, computed, inject, input, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { emptyProject, Project, ProjectForm } from '@project/models';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  imports: [ReactiveFormsModule]
})
export class ProjectFormComponent {
  private fb = inject(NonNullableFormBuilder);

  project = input(emptyProject());
  newRecord = input(true);
  quickMode = input(false);

  submitted = output<Project>();

  buttonText = computed(() => {
    return this.newRecord() ? 'Crea Progetto' : 'Modifica Progetto';
  });

  form = computed(() => {
    const { id, name, description, start, end, priority } = this.project();

    return this.fb.group<ProjectForm>({
      id: this.fb.control(id, Validators.required),
      name: this.fb.control(name, Validators.required),
      description: this.fb.control(description, Validators.required),
      start: this.fb.control(start, Validators.required),
      end: this.fb.control(end, !this.quickMode() ? Validators.required : []),
      priority: this.fb.control(priority, Validators.required)
    });
  });

  onSubmit(): void {
    if (this.form().invalid) {
      return this.form().markAllAsTouched();
    }

    const project: Project = {
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
      ...this.form().getRawValue()
    };

    this.submitted.emit(project);
  }
}
