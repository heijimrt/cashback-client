import { Injectable } from '@angular/core';
import { HttpAuthService } from '../http/http-auth.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { UserResponse } from '../../interfaces/user-response.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpAuthService) { }

  public login(user: User): Observable<UserResponse> {
    return this.http
      .post('auth/login', user)
      .pipe(map(user => user['body']));
  }

  public register(user: User) {
    return this.http.post('auth/register', user);
  }
}
