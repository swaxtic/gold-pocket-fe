import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [1, 2, 3].map((n) => `/assets/carousel-${n}.png`);

  constructor(config: NgbCarouselConfig) {  
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  } 

  ngOnInit(): void {
  }

}
