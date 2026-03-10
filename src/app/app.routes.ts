import { Routes } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart'

export const routes:Routes=[
 {path:'',component:ProductListComponent},
 {path:'cart',component:ShoppingCartComponent}
]