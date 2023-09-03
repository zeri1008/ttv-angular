import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToPicassoComponent } from './text-to-picasso.component';
import { ImgRightbarComponent } from '../img-rightbar/img-rightbar.component';

@NgModule({
  declarations: [TextToPicassoComponent, ImgRightbarComponent],
  imports: [CommonModule],
  exports: [TextToPicassoComponent],
})
export class TextToPicassoModule {}
