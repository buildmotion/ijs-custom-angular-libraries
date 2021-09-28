import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    // FIXME: consider injecting a logging service here; AN OPP FOR ANOTHER LIBRARY PROJECT! :)
  ) {
    console.log(`Loading [ErrorHandlerService] during app initialization.`);
  }

  handleError(error: any): void {
    console.error(`ErrorHandlerService: ${error}`); // really? you'll want to do much more than this, right?
    // FIXME: USE A LOGGING SERVICE TO SEND THE INFORMATION HOME...KNOW AND UNDERSTAND THE HEALTH OF THE APP
  }
}
