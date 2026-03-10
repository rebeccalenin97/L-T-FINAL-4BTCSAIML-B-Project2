import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service'
import { Product } from '../../models/product'

@Component({
 selector:'app-product-list',
 standalone:true,
 imports:[CommonModule,RouterModule],
 templateUrl:'./product-list.html',
 styleUrls:['./product-list.css']
})

export class ProductListComponent implements OnInit{

 products:Product[]=[]

 constructor(
  private productService:ProductService,
  private cartService:CartService
 ){}

 ngOnInit(){
  this.products = this.productService.getProducts()
 }

 addToCart(product:Product){
  this.cartService.addToCart(product)
 }

}