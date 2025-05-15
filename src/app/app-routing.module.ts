import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demos/demo/demo.component';

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
