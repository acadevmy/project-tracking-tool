import { Task } from './task.model';

export type Priority = 'low' | 'medium' | 'high';

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
