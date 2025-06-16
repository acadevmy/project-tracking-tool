import { Routes } from '@angular/router';
import { authGuard } from '@auth/guards';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@shared/shared.routes')
  },
  {
    path: 'projects',
    loadChildren: () => import('@project/project.routes'),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
