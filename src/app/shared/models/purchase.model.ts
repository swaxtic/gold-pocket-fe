import { ProductModel } from "./product.model";

export interface PurchaseRequestModel {
  purchaseType: number,
  purchaseDetails: [
    {
      quantityInGram: number,
      pocket:{ 
          id: string
      } 
    }
  ]
}

export interface PurchaseHistoryDetailResponse {
    id: string,
    price: number,
    quantityInGram: number,
    product: ProductModel
    pocket: {
        id: string,
        pocketName: string,
    }
}

export interface PurchaseHistoryResponse {
    id: string,
    purchaseDate: Date,
    purchaseType: number,
    customer: {
        id: string,
        firstName: string,
        lastName: string,
    },
    purchaseDetails: PurchaseHistoryDetailResponse[]
}