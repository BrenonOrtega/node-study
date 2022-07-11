import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product, IProduct } from './product';

export interface IProductService {
  getProducts(): Observable<IProduct[]>;
}


@Injectable({
  providedIn:"root"
})
export class ProductService implements IProductService {
  private _url = "api/Products/products.json";
  constructor(private http: HttpClient) {} 

  getProducts = () => this.http.get<IProduct[]>(this._url);
}
