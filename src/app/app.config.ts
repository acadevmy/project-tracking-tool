import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import * as fromAuth from '@auth/providers';
import * as fromBase from '@base/providers';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ...fromAuth.PROVIDERS,
    ...fromBase.PROVIDERS,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
