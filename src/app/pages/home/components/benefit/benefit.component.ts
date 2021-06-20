import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  serviceBenefits = [
    {
      title: 'Delivery',
      description: 'We have free delivery service to all city in Indonesia.'
    },
    {
      title: 'Legality',
      description: 'We commit to keep your trusted with legality transaction.'
    },
    {
      title: 'Price',
      description: 'Good quality with the best prices.'
    },
  ]

  productBenefits = [
    {
      title: 'Transaction',
      description: 'Our transaction is simple and secure.'
    },
    {
      title: 'Reward',
      description: 'More transaction more point and reward.'
    },
    {
      title: 'Brand',
      description: 'Our product is the best on quality and brand.'
    },
  ]

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigateByUrl("/login")
  }

}
