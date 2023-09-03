import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { HeaderModule } from 'src/app/_components/header/header.module';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule, HeaderModule
  ]
})
export class PostModule { }
