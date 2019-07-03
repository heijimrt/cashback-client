import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService
{

  public handle(error: any): void
  {
    console.error(error);
  }
}