import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryHomeComponent } from './gallery-home.component';

@NgModule({
  declarations: [GalleryHomeComponent],
  exports: [GalleryHomeComponent],
  imports: [CommonModule]
})
export class GalleryHomeModule { }
