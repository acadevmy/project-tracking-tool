import { Routes } from '@angular/router';
import {
  ProjectDetailPageComponent,
  ProjectOverviewPageComponent
} from '@project/pages';
import { projectResolver } from '@project/resolvers/project.resolver';

export default [
  {
    path: 'detail/:id',
    component: ProjectDetailPageComponent,
    resolve: {
      project: projectResolver
    }
  },
  {
    path: '',
    component: ProjectOverviewPageComponent
  }
] satisfies Routes;
