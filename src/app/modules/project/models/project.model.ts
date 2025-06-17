import { FormControl } from '@angular/forms';

import { Task } from './task.model';

export type Priority = 'low' | 'medium' | 'high';

export type EditProject = Omit<Project, 'code' | 'done' | 'tasks'>;

export interface Project {
  id: string;
  code: string;
  name: string;
  description?: string;
  start: Date;
  end?: Date;
  priority: Priority;
  done: boolean;
  tasks: Task[];
}

export interface ProjectForm {
  id: FormControl<string>;
  name: FormControl<string>;
  description: FormControl<string | undefined>;
  start: FormControl<Date>;
  end: FormControl<Date | undefined>;
  priority: FormControl<Priority>;
}

export const emptyProject = (): EditProject => ({
  id: '0',
  name: '',
  description: '',
  start: new Date(),
  priority: 'low'
});
