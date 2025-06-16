import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, Provider } from '@angular/core';

import { GlobalErrorHandler } from './handlers/';
import { HttpBaseUrlInterceptor } from './interceptors';

export const PROVIDERS: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpBaseUrlInterceptor,
    multi: true
  },
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }
];
