import { Injectable } from '@angular/core';
import { HttpAuthService } from 'src/app/core/services/http/http-auth.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponseBase } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly httpService: HttpAuthService) { }

  public getAll(): Observable<any> {
    return this.httpService
      .get(`products`)
      .pipe(map((response: HttpResponseBase) => response['body']));
  }
}
