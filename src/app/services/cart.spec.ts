import { Injectable } from '@angular/core'
import { Product } from '../models/product'
import { CartItem } from '../models/cart-item.model'

@Injectable({
 providedIn:'root'
})

export class CartService{

 cartItems:CartItem[]=[]

 addToCart(product:Product){
  this.cartItems.push({product,quantity:1})
 }

 getCart(){
  return this.cartItems
 }

 removeItem(index:number){
  this.cartItems.splice(index,1)
 }

}