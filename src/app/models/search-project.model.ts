import { Priority } from './project.model';

export interface SearchProject {
  name?: string;
  priority?: Priority;
  done?: boolean;
}
