import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMainComponent } from './route-main.component';
import { HeaderModule } from 'src/app/_components/header/header.module';
import { SidebarModule } from 'src/app/_components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    RouteMainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule
  ]
})
export class RouteMainModule { }
