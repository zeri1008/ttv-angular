import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageToImageComponent } from './image-to-image.component';



@NgModule({
  declarations: [ImageToImageComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageToImageComponent]
})
export class ImageToImageModule { }
