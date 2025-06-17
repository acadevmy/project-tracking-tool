import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from '@project/models';
import { catchError, filter, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>('/projects').pipe(
      catchError((error) => {
        console.error('An error occurred while fetching projects', error);

        return throwError(() => error);
      })
    );
  }

  getBy(id: string): Observable<Project> {
    return this.http.get<Project[]>('/projects').pipe(
      map((projects) => projects.find((project) => project.id === id)),
      filter((project) => !!project),
      catchError((error) => {
        console.error('An error occurred while fetching project', error);

        return throwError(() => error);
      })
    );
  }

  add(project: Project): Observable<Project> {
    const { id: _, ...newProject } = project;

    return this.http.post<Project>('/projects', newProject).pipe(
      catchError((error) => {
        console.error('An error occurred while adding the project', error);

        return throwError(() => error);
      })
    );
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(`/projects/${project.id}`, project).pipe(
      catchError((error) => {
        console.error('An error occurred while updating the project', error);

        return throwError(() => error);
      })
    );
  }
}
