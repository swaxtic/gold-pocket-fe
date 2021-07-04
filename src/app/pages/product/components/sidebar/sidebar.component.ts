import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  name: string = '';

  constructor() { 
    this.name = sessionStorage.getItem('name') || '';
  }

  ngOnInit(): void {
  }

}
