import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  fullName: string = "";

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    // 
  }

  ngOnInit(): void {
    this.fullName = this.authService.getUserProfile();
  }

  logout(): void {
    sessionStorage.clear()
    this.router.navigateByUrl("/login");
  }

}
