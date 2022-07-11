export interface IProduct {
  name: string,
  code: string,
  available: boolean,
  price: number,
  rating: number,
  imageSource: string,
  showImage: boolean,
}

export class Product implements IProduct {
  constructor(productData: IProduct) {
    this.name = productData.name;
    this.code = productData.code;
    this.available = productData.available;
    this.price = productData.price;
    this.rating = productData.rating;
    this.imageSource = productData.imageSource;
    this.showImage = true;
  }

  name: string;
  code: string;
  available: boolean;
  price: number;
  rating: number;
  imageSource: string;
  showImage: boolean;

  isAvailable = (): string => this.available ? "On Stock" : "Out of Order";
}

class otherProduct extends Product { 
  override isAvailable = () => this.available ? "No Itens on stock" : "Out of Order";

}
