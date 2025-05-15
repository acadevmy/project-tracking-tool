import { Injectable, signal } from '@angular/core';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSource = signal<Project[]>([
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    }
  ]);

  projects = this.projectsSource.asReadonly();

  getBy(id: number): Project | undefined {
    return this.projectsSource().find((project) => project.id === id);
  }

  add(project: Project): void {
    this.projectsSource.update((projects) => [project, ...projects]);
  }
}
