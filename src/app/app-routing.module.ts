import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demos/demo/demo.component';
import {DemoFormComponent} from './demos/demo-form/demo-form.component';
import {DemoRoutingComponent} from './demos/demo-routing/demo-routing.component';
import {adminGuard} from './modules/shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'demo-form',
    component: DemoFormComponent,
    // canActivate: [
    //   adminGuard,
    // ]
  },
  {
    path: 'demo-route/:id',
    component: DemoRoutingComponent,
  },
  {
    path: 'exercices',
    loadChildren: () => import('./exercices/exercices.module')
      .then(m => m.ExercicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
