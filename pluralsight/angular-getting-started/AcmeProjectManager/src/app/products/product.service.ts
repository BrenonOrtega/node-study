import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({providedIn:"root"})
export class ProductService implements IProductService{
  getProducts = () => fakeProducts();
  getProductsAsync = async () => Promise.resolve(fakeProducts());
}

export interface IProductService {
  getProducts(): Product[];
  getProductsAsync(): Promise<Product[]>;
}

const fakeProducts = (): Product[] => [
  new Product({
    name: "product 1",
    code: "SKU-100101",
    available: true,
    price: 10,
    rating: 1,
    showImage: false,
    imageSource: "assets/images/garden_cart.png"
  }),
  new Product({
    name: "product 2",
    code: "SKU-200101",
    available: true,
    price: 20,
    rating: 2,
    showImage: false,
    imageSource: "assets/images/hammer.png"
  }),
  new Product({
    name: "product 3",
    code: "SKU-300101",
    available: true,
    price: 30,
    rating: 3,
    showImage: false,
    imageSource: "assets/images/saw.png"
  }),
  new Product({
    name: "product 4",
    code: "SKU-400101",
    available: true,
    price: 40,
    rating: 4,
    showImage: false,
    imageSource: "assets/images/xbox-controller.png"
  }),
  new Product({
    name: "product 5",
    code: "SKU-500101",
    available: true,
    price: 50,
    rating: 5,
    showImage: false,
    imageSource: "assets/images/leaf_rake.png"
  })
]; 
