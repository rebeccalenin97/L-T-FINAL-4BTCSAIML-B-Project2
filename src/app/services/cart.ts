import { Injectable } from '@angular/core'
import { Product } from '../models/product'
import { CartItem } from '../models/cart-item.model'

@Injectable({
  providedIn:'root'
})

export class CartService{

  items:CartItem[]=[]

  addToCart(product:Product){
    this.items.push({product,quantity:1})
  }

  getCart(){
    return this.items
  }

  removeItem(index:number){
    this.items.splice(index,1)
  }

}