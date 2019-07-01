import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  constructor(private http: HttpClient) { }

  public get(uri: string): Observable<HttpResponseBase> {
    return this.http.get(
      `${environment.apiUri}/${uri}`,
      { observe: 'response' }
    );
  }

  public post(
    uri: string,
    body: Object
  ): Observable<HttpResponseBase> {
    return this.http.post(
      `${environment.apiUri}/${uri}`,
      body,
      { observe: 'response' }
    );
  }
}
