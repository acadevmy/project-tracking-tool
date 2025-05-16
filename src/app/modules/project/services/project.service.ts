import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Project } from '@project/models';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.baseUrl}/projects`);
  }

  getBy(id: string): Observable<Project> {
    return this.http.get<Project[]>(`${environment.baseUrl}/projects`).pipe(
      map((projects) => projects.find((project) => project.id === id)),
      filter((project) => !!project)
    );
  }

  add(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.baseUrl}/projects`, project);
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(
      `${environment.baseUrl}/projects/${project.id}`,
      project
    );
  }
}
