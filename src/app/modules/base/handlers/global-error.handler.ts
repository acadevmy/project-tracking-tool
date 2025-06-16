/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse | any): void {
    if (!navigator.onLine) {
      console.warn('No internet connection available');
      return;
    }

    if (error instanceof HttpErrorResponse) {
      console.error('An error occurred while fetching data', error);
      return;
    }

    console.error('A generic error occurred', error);
  }
}
