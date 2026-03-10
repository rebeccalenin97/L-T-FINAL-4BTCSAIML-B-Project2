import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartService } from '../../services/cart.service'
import { CartItem } from '../../models/cart-item.model'

@Component({
 selector:'app-shopping-cart',
 standalone:true,
 imports:[CommonModule],
 templateUrl:'./shopping-cart.html',
 styleUrls:['./shopping-cart.css']
})

export class ShoppingCartComponent{

 items:CartItem[]=[]

 constructor(private cartService:CartService){
  this.items=this.cartService.getCart()
 }

 remove(index:number){
  this.cartService.removeItem(index)
 }

}