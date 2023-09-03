import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home.component';

@NgModule({
  declarations: [
    MainHomeComponent
  ],
  exports: [
    MainHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainHomeModule { }
