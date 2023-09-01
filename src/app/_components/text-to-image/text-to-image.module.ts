import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToImageComponent } from './text-to-image.component';
import { ImgRightbarComponent } from '../img-rightbar/img-rightbar.component';

@NgModule({
  declarations: [TextToImageComponent],
  imports: [CommonModule],
  exports: [TextToImageComponent],
})
export class TextToImageModule {}
