import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToCharacterComponent } from './text-to-character.component';
import { ImgRightbarModule } from '../_components/img-rightbar/img-rightbar.module';



@NgModule({
  declarations: [TextToCharacterComponent],
  imports: [
    CommonModule, ImgRightbarModule
  ],
  exports: [
    TextToCharacterComponent
  ]
})
export class TextToCharacterModule { }
