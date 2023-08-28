import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteBoardsComponent } from './route-boards.component';
import { HeaderModule } from 'src/app/_components/header/header.module';
import { HeaderComponent } from 'src/app/_components/header/header.component';



@NgModule({
  declarations: [
    RouteBoardsComponent
  ],
  imports: [
    CommonModule, HeaderModule
  ]
})
export class RouteBoardsModule { }
