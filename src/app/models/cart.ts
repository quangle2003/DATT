import { IProducts } from "./product";

export interface ICarts {
    id: string;
    name: string;
    price: number;
    img: string;
    quantity: number;
    totalPrice: number
    product : IProducts 
  }