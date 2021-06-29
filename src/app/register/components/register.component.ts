import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;

  public authData: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    // this.loading=true;
    // this.authService.saveAuth(this.authData.value)
    //   .then(() => {
    //     this.loading=false;
    //     this.router.navigateByUrl('');
    //   });
  }

}
