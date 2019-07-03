import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService
{
  public key: string = 'AuthToken';
  public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   *
   * @returns {Observable<T>}
   */
  public isLoggedIn(): Observable<boolean>
  {
    return this.isLoginSubject.asObservable();
  }

  /**
   * Save auth token
   *
   * @param token
   */
  public saveToken(token): void
  {
    window.localStorage.removeItem(this.key);
    window.localStorage.setItem(this.key,  JSON.stringify(token));
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  public hasToken(): boolean
  {
    return !!window.localStorage.getItem(this.key);
  }

  /**
   * Check if there is a token on requisition from api
   *
   * @param item
   */
  public hasRequestedToken(item: Object): boolean
  {
    return item instanceof Object
        && 'token' in item;
  }

  /**
   * Return data from token
   */
  public get token(): string
  {
    const item = JSON.parse(localStorage.getItem(this.key));
    if (item) return item;
  }

  /**
   * Remove auth token
   */
  public clearToken(): void
  {
    window.localStorage.removeItem(this.key);
    window.localStorage.clear();
  }
}