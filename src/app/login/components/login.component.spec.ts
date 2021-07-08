import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { from, Observable, of } from 'rxjs';
import { AuthModel } from 'src/app/shared/models/auth-model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthService]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    authService = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#FormGroup', ()=> {
    it('should test form validity', () => {
      const form = component.authData;
      expect(form.valid).toBeFalsy();
      form.setValue({email: 'adipsandro@gmail.com', password: 'password'})
      expect(form.valid).toBeTruthy();
    })
  })

  describe('#Login()', () => {
    const mockLoginResponse = {
      "id": "ff80808178f8dea30178f8ded8fe0000",
      "username": "ahmad",
      "status": true,
      "email": "adipsandro@gmail.com",
      "firstName": "Ahmad",
      "lastName": "Invoker"
  }
    it('should loading at Login()', () => {
      component.login();
      expect(component.loading).toBeTruthy()
    })
    it('should call login() after click', () => {
      const spy = spyOn(authService, 'login').and.callFake((credentials: AuthModel): Observable<any> => {
        return from([mockLoginResponse])
      })
      component.login();
      expect(spy).toHaveBeenCalled();
    });

  });
});
