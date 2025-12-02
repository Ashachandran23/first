import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Help } from './help/help';

export const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:Home},
  {path:"About",component:About},
  {path:"Product",component:Product},
  {path:"Contact",component:Contact},
  {path:"Help",component:Help}
];
