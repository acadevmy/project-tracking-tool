import { Routes } from '@angular/router';
import {
  ProjectDetailPageComponent,
  ProjectOverviewPageComponent
} from '@project/pages';

export default [
  {
    path: 'detail/:id',
    component: ProjectDetailPageComponent
  },
  {
    path: '',
    component: ProjectOverviewPageComponent
  }
] satisfies Routes;
