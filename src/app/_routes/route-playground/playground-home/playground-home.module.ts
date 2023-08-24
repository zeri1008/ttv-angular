import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundHomeComponent } from './playground-home.component';

@NgModule({
  declarations: [PlaygroundHomeComponent],
  exports: [PlaygroundHomeComponent],
  imports: [CommonModule]
})
export class PlaygroundHomeModule { }
