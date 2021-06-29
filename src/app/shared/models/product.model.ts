import { ProductHistoriesModel } from "./product-history.model";

export interface ProductModel {
  id: string,
  productImage: string,
  productName: string,
  productPriceBuy: number,
  productPriceSell: number,
  productStatus: number
  updatedAt: Date,
  createdAt: Date,
  productHistories?: [ProductHistoriesModel]
}