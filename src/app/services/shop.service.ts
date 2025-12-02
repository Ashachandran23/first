import { Injectable } from '@angular/core';
import { sample_shops } from '../../data';
import { shop } from '../shared/models.js/shop';



@Injectable({
  providedIn: 'root',
})
export class Services {
  private apiurl='http://localhost:2000/shops';
  
  shopData: shop[] = [];
  http: any;
 
  constructor(){
          this.shopData = sample_shops;
  }

  post(shops:any,object:any){
  return this.http.post("http://localhost:2000/shops").subscribe(
    {
      
    }
  )
}

  getall():shop[]{
    return sample_shops;
  }
   update(product: shop) {
    const index = this.shopData.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.shopData[index] = { ...product };
    }
  }
   
  
}