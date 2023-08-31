import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteBoardsComponent } from './route-boards.component';
import { HeaderModule } from 'src/app/_components/header/header.module';
import { HeaderComponent } from 'src/app/_components/header/header.component';
import { PostComponent } from './post/post.component';
import { FAQComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    RouteBoardsComponent,
    PostComponent,
    FAQComponent
  ],
  imports: [
    CommonModule, HeaderModule
  ]
})
export class RouteBoardsModule { }
