import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

import { HttpBaseUrlInterceptor } from './interceptors';

export const PROVIDERS: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpBaseUrlInterceptor,
    multi: true
  }
];
