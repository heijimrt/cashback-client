import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from 'src/app/core/services/token/token.service';
import { HttpErrorHandlerService } from '../services/error/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor
{
  constructor(
    private errorHandler: HttpErrorHandlerService,
    private tokenService: TokenService
  ) { }

  public intercept(
      request: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {

      request = request.clone(this.getHeadersToSet());
      return next
        .handle(request)
        .pipe(catchError(err => this.throwForCatchError(err)));
  }

  /**
   * Return setHeaders object to put on clone request method
   */
  private getHeadersToSet(): Object
  {
      return {
          setHeaders: {
              Authorization : `Bearer ${this.tokenService.token}`
          }
      };
  }

  /**
   * Return an throwError when catch it on catchError method
   *
   * @param err
   */
  private throwForCatchError(err: any): Observable<any>
  {
    if (err instanceof HttpErrorResponse) {
      this.errorHandler.handle(err);
    }
    const error = err.error.message || err.statusText;
    return throwError(error);
  }
}