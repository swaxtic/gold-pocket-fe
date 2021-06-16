import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData = [
    {
      urlImage: '../../../../../assets/images/carousel-1.png',
      title: "Gold Investment",
      desciption: 'Invest your assets and wealth in gold.'
    },
    {
      urlImage: '../../../../../assets/images/carousel-2.png',
      title: "Second slide label",
      desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      urlImage: '../../../../../assets/images/carousel-3.png',
      title: "Third slide label",
      desciption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
  ]

  ngOnInit(): void {

  }

}
