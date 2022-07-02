import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private _service: ProductService) { }

  private _filters: string = "";
  private _filteredProducts: Product[] = [];
  private products: Product[] = [];

  pageTitle: string = "Product List";
  imageConfiguration = configuration;

  toggleImage(): void {
    this.imageConfiguration.toggleImage();
    this.log("Toggling");
  }

  get filteredProducts() { return this._filteredProducts; }

  get filters(): string { return this._filters; }
  set filters(value: string) {
    this._filters = value;

    this._filteredProducts = value
      ? this.products.filter(x => x.name.toLocaleUpperCase().includes(value.toLocaleUpperCase()))
      : this.products;
  }

  log = (value: string): void => console.log(value);

  onRatingClick = (eventData: string) => this.pageTitle += eventData;

  // REMINDER: NEVER - EVER - EVER Use arrow functions here at lifecycle hooks.
  ngOnInit() {
    this._service.getProductsAsync().then((value) => {
      this.products = value;
      this._filteredProducts = this.products;
    }).catch(err => console.error(err));
    console.log("I am Initialized.");
  }
}



interface ImageConfigurations {
  showImage: boolean,
  sizeInPixels: number,
  marginInPixels: number
  toggleImage(): void
}



const configuration: ImageConfigurations = {
  showImage: true,
  sizeInPixels: 50,
  marginInPixels: 2,
  toggleImage: function () { this.showImage = !this.showImage }
}
