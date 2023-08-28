import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';

@NgModule({
  declarations: [LanguagesComponent],
  exports: [LanguagesComponent],
  imports: [CommonModule]
})
export class LanguagesModule { }
