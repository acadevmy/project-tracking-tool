import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Project } from '@project/models/project.model';
import { ProjectService } from '@project/services/project.service';

export const projectResolver: ResolveFn<Project> = (
  route: ActivatedRouteSnapshot
) => {
  const projectService = inject(ProjectService);
  const id = route.params['id'];

  return projectService.getBy(id);
};
