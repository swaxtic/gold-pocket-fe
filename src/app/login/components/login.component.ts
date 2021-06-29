import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  public authData: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor( 
    private readonly authService: LoginService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    //this is intentional
  }

  login(): void{
    this.loading=true;
    const credentials = this.authData.value
    console.log(credentials);
    this.authService.login(credentials).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem('user-id', data.id)
      sessionStorage.setItem('name', data.firstName+" "+data.lastName)
      sessionStorage.setItem('username', data.username)
      this.loading=false;
      this.router.navigateByUrl(sessionStorage.getItem('redirectBackUrl') || '/');
    }, (error) => {
      alert('Password atau Email anda tidak ditemukan');
      this.loading=false;
      console.log(error);
    })
  }

}
