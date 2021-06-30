import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PocketModel, PocketModelRequest } from 'src/app/shared/models/pocket.model';
import { ProductModel } from 'src/app/shared/models/product.model';
import { PocketService } from 'src/app/shared/services/pocket-service/pocket.service';

@Component({
  selector: 'app-product-top-main',
  templateUrl: './product-top-main.component.html',
  styleUrls: ['./product-top-main.component.scss']
})
export class ProductTopMainComponent implements OnInit {

  @ViewChild('closeAddPocketModal') closeAddPocketModal: any = ElementRef;
  @ViewChild('closeEditPocketModal') closeEditPocketModal: any = ElementRef;

  
  pocketData: FormGroup = new FormGroup({
    pocketName: new FormControl('',Validators.required),
  });

  @Input("product")
  product: ProductModel = {
    id: '',
    productImage: '',
    productName: '',
    productPriceBuy: 0,
    productPriceSell: 0,
    productStatus: 0,
    updatedAt: new Date,
    createdAt: new Date
  };

  @Input("pockets")
  pockets: PocketModel[] = [{
    id: '',
    pocketName: '',
    pocketQty: 0,
    product: this.product,
    customer: {
      id: sessionStorage.getItem('user-id'),
    }
  }];

  @Input("totalQty")
  totalQty: number = 0;

  loading: boolean = false;
  selectedPocket: any = {
    id: '',
    pocketName: '',
    pocketQty: 0,
  }

  constructor(
    private readonly pocketService: PocketService
    // private readonly router: Route
  ) { }

  ngOnInit(): void {
    //
  }

  addPocket(): void {
    const sendData: PocketModelRequest = {
      pocketName: this.pocketData.value.pocketName,
      pocketQty: 0,
      product: {
        id: this.product.id
      },
      customer: {
        id: sessionStorage.getItem('user-id')
      }
    }
    console.log(sendData);
    this.pocketService.addPocket(sendData)
      .then(
        (response => {
          window.location.reload()
          console.log(response);
        })
      ).catch(error => console.log(error));
  }

  editPocket(): void {
    const sendData: PocketModelRequest = {
      id: this.selectedPocket.id,
      pocketName: this.pocketData.value.pocketName,
      pocketQty: this.selectedPocket.pocketQty,
      product: {
        id: this.product.id
      },
      customer: {
        id: sessionStorage.getItem('user-id')
      }
    }
    this.pocketService.editPocket(sendData)
      .then(
        (response => {
          window.location.reload()
          console.log(response);
        })
      ).catch(error => console.log(error))
  }

  deletePocket(id: string): void {
    this.pocketService.deletePocket(id)
      .then(
        (response => {
          window.location.reload()
          alert(response.message)
          console.log(response);
        })
      ).catch(error => alert(error.message))
    ;
  }

  close(): void {
    this.closeAddPocketModal.nativeElement.click();
  }

  closeEditModal(): void {
    this.closeEditPocketModal.nativeElement.click();
  }


}
