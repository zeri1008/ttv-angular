import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToImageComponent } from './text-to-image.component';
import { ImgRightbarModule } from '../img-rightbar/img-rightbar.module';



@NgModule({
  declarations: [TextToImageComponent],
  imports: [
    CommonModule, ImgRightbarModule
  ],
  exports:[TextToImageComponent]
})
export class TextToImageModule { }
