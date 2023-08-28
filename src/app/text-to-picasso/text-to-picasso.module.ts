import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToPicassoComponent } from './text-to-picasso.component';
import { ImgRightbarModule } from '../_components/img-rightbar/img-rightbar.module';



@NgModule({
  declarations: [TextToPicassoComponent],
  imports: [
    CommonModule, ImgRightbarModule
  ],
  exports: [ TextToPicassoComponent
  ]
})
export class TextToPicassoModule { }
