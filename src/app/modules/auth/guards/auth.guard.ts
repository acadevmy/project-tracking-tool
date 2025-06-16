import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = (): boolean => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (!user) {
    router.navigateByUrl('/home');

    return false;
  }

  return true;
};
