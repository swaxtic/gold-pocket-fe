import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    {
      url: '#',
      text: 'Home'
    },
    {
      url: '#',
      text: 'Event'
    },
    {
      url: '#',
      text: 'About'
    },
    {
      url: '#',
      text: 'Contact'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
