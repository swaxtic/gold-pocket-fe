import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData = [
    {
      imageUrl: '../../../../../assets/1.png',
      title: 'platinum investment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam ab consequatur laborum fugiat distinctio.'
    },
    {
      imageUrl: '../../../../../assets/2.png',
      title: 'gold investment',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nemo ipsa dolor error excepturi! Iste.'
    },
    {
      imageUrl: '../../../../../assets/3.png',
      title: 'silver investment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo impedit dolorem odit quia ea.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
