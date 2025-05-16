import {RouterModule, Routes} from '@angular/router';
import {Exo1Component} from './components/exo1/exo1.component';
import {Exo4Component} from './components/exo4/exo4.component';
import {Exo3Component} from './components/exo3/exo3.component';
import {Exo2Component} from './components/exo2/exo2.component';
import {NgModule} from '@angular/core';
import {Exo5Component} from "./components/exo5/exo5.component";
import {LoginPageComponent} from './components/exo-login/login-page/login-page.component';
import {ProductsComponent} from './components/exo-login/products/products.component';
import {authGuard} from '../modules/shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'exo1',
    component: Exo1Component,
  },
  {
    path: 'exo2',
    component: Exo2Component,
  },
  {
    path: 'exo3',
    component: Exo3Component,
  },
  {
    path: 'exo4',
    component: Exo4Component,
  },
  {
    path: 'exo5',
    component: Exo5Component,
  },
  {
    path: 'exo-login',
    component: LoginPageComponent,
  },
  {
    path: 'exo-product',
    component: ProductsComponent,
    canActivate: [
      authGuard,
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
