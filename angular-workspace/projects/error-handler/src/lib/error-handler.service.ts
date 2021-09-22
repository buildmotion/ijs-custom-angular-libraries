import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    // consider injecting a logging service here;
  ) { }

  handleError(error: any): void {
    console.error(error); // really? you'll want to do much more than this, right?
  }
}
