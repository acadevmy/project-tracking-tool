import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export class HttpBaseUrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiRequest = request.clone({
      url: environment.baseUrl + request.url
    });

    return next.handle(apiRequest);
  }
}
