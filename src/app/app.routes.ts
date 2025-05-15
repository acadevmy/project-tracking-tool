import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
