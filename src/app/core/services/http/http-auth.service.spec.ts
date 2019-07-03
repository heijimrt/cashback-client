import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpAuthService } from './http-auth.service';

describe('HttpAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: HttpAuthService = TestBed.get(HttpAuthService);
    expect(service).toBeTruthy();
  });
});
