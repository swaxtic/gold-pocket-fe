import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthModel } from '../../models/auth-model';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockResultLoginSuccess = {
    "id": "ff80808178f8dea30178f8ded8fe0000",
    "username": "ahmad",
    "status": true,
    "email": "adipsandro@gmail.com",
    "firstName": "Ahmad",
    "lastName": "Invoker"
  }

  const mockResultLoginFailed = {
    "timestamp": "2021-07-02T02:54:27.937+00:00",
    "status": 401,
    "error": "Unauthorized",
    "message": "401 UNAUTHORIZED",
    "path": "/login"
}

  describe('#LoginCustomer', () => {

    it('should return an succes Login Response', () => {
      const credentials: AuthModel = {
        email: "adipsandro@gmail.com",
        password: "password"
      }

      service.login(credentials)
        .subscribe((response: any) => {
          console.log("#Login result from spec", response);
          expect(response).toBe(mockResultLoginSuccess);
        })
    
      const request = httpMock.expectOne('http://localhost:8083/login');
      request.flush(mockResultLoginSuccess);
      expect(request.request.method).toBe('POST');

    })

    it('should return an Failed Login Response', () => {
      const credentials: AuthModel = {
        email: "adipsandro@gmail.comm",
        password: "password"
      }

      service.login(credentials)
        .subscribe((response: any) => {
          console.log("#Login result from spec", response);
          expect(response).toBe(mockResultLoginFailed);
        })
    
      const request = httpMock.expectOne('http://localhost:8083/login');
      request.flush(mockResultLoginFailed);
      expect(request.request.method).toBe('POST');

    })

  });

});
