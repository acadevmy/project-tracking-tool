import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
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
  ];

  private projectsSource = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSource.asObservable();

  getAll(): Observable<Project[]> {
    return this.projects$;
  }

  getBy(id: number): Observable<Project> {
    return this.projects$.pipe(
      map((projects) => projects.find((project) => project.id === id)),
      filter((project) => !!project)
    );
  }

  add(project: Project): void {
    const nextProject: Project = { ...project, id: this.projects.length + 1 };
    this.projects = [nextProject, ...this.projects];
    this.projectsSource.next(this.projects);
  }

  update(project: Project): void {
    this.projects = this.projects.map((elem) => {
      return elem.code === project.code ? { ...elem, ...project } : elem;
    });

    this.projectsSource.next([...this.projects]);
  }
}
