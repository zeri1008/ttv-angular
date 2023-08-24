import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteMainComponent } from './_routes/route-main/route-main.component';
import { RoutePlaygroundComponent } from './_routes/route-playground/route-playground.component';

const routes: Routes = [
  {
    path: '',
    component: RoutePlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
