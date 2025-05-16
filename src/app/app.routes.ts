import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@shared/shared.routes')
  },
  {
    path: 'projects',
    loadChildren: () => import('@project/project.routes')
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
