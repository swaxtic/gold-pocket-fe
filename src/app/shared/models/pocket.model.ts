import { CustomerModel } from "./customer-model";
import { ProductModel } from "./product.model";

export interface PocketModel {
  id: string,
  pocketName: string,
  pocketQty: number,
  product: ProductModel,
  customer: {
    id: any
  }
}

export interface PocketModelRequest {
  id?: string,
  pocketName: string,
  pocketQty: number,
  product: {
    id: any
  },
  customer: {
    id: any
  }
}