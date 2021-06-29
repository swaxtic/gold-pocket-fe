import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string = "";
  dateNow: Date = new Date();

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fullName = this.authService.getUserProfile();
  }

}
