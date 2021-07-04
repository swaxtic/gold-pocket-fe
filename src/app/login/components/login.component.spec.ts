import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let mockAuthService: jasmine.SpyObj<AuthService>

  beforeEach(async () => {
    // mockAuthService = jasmine.createSpyObj('AuthService',['login', 'getUserProfile'])
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      // providers: [{
      //   provide : AuthService, useValue: mockAuthService
      // }]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // mockAuthService.login
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

  const mockLoginOutput = {
      "id": "ff80808178f8dea30178f8ded8fe0000",
      "username": "ahmad",
      "status": true,
      "email": "adipsandro@gmail.com",
      "firstName": "Ahmad",
      "lastName": "Invoker"
  }

  describe('#Login()', () => {
    // it('should call service', () => {
    //    expect(mockAuthService.login).toHaveBeenCalled()
    // })
    it('should loading at Login()', () => {
      component.login();
      expect(component.loading).toBeTruthy()
    })

    
    // it('should grant user', fakeAsync(() => {
    //   const mockTask = productService.getData('ff80808178fdba3a0178fdbbe0b10000');
    //   mockTask.subscribe((product) => {
    //     fixture.detectChanges();
    //     tick();
    //     component.product = product
    //     fixture.detectChanges();
    //     expect(component.product).toEqual(mockProduct);
    //   });
    // }))

  });
});
