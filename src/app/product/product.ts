import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { shop } from '../shared/models.js/shop';

import { Services } from '../services/shop.service';



@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  object={
        id: 'string',
        name:'string',
        quantity:'number',
        lastchecked: 'string',
        newstockqty: 'number',
        totalstock:'number',
  }

shops: shop[] = [];

item: any;

constructor(private services:Services){}

ngOnInit() {
  this.shops=this.services.getall();
  this.shops.forEach(item => {
      item.lastchecked = this.getTodayDate();
    });

    this.shops
  
}
onsubmit()
{
  this.services.post(this.shops,this.object).subscribe(
  {
     next:()=>
     {

     },
     error:(err: { error: any; })=>
     {
      alert(err.error)
     }
  })
  this.services.getall()

}
foredit(items:any)
{
  this.object=items;
}

getTodayDate(): string {
  const today = new Date();

  const day = today.getDate().toString();
  const month = today.toLocaleString('en-US', { month: 'long' }); // Full month
  const year = today.getFullYear();

  return `${day} ${month} ${year}`;  
}


  calculateTotal(item: any) {
    const qty = Number(item.quantity) || 0;
    const newqty = Number(item.newstockqty) || 0;

    item.totalstock = qty + newqty;

  
   item.lastchecked = this.getTodayDate();
  }

updateProduct(object: any) 
  {
    
    alert(`${object.name} stock updated successfully!`);
  }

  checkAllProducts() 
  {
    
    alert('Weekly check completed for all products!');
  }

   checkToAdd() 
  {
    
    alert('Add and completed the all products');
  }


  }

  

  
  



