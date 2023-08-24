import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteGalleryComponent } from './route-gallery.component';
import { HeaderModule } from 'src/app/_components/header/header.module';
import { GalleryHomeModule } from './gallery-home/gallery-home.module';

@NgModule({
  declarations: [
    RouteGalleryComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    GalleryHomeModule
  ]
})
export class RouteGalleryModule { }
