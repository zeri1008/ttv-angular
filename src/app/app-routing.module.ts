import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteMainComponent } from './_routes/route-main/route-main.component';
import { RoutePlaygroundComponent } from './_routes/route-playground/route-playground.component';
import { RouteGalleryComponent } from './_routes/route-gallery/route-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: RoutePlaygroundComponent
  },
  {
    path: 'gallery',
    component: RouteGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
