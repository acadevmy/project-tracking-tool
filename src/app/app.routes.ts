import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects/detail',
    component: ProjectDetailComponent
  },
  {
    path: 'projects',
    component: ProjectContainerComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
