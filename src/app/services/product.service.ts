import { Injectable } from '@angular/core'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      description: 'Gaming Laptop',
      image: 'laptop.jpg',
      category: 'Electronics',
      stock: 5
    },
    {
      id: 2,
      name: 'Headphones',
      price: 2000,
      description: 'Wireless Headphones',
      image: 'headphones.jpg',
      category: 'Electronics',
      stock: 10
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 30000,
      description: 'Android Smartphone',
      image: 'mobiles.jpg',
      category: 'Electronics',
      stock: 7
    }
  ]

  getProducts(): Product[] {
    return this.products
  }

}