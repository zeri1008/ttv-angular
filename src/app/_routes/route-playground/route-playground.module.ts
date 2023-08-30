import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePlaygroundComponent } from './route-playground.component';
import { HeaderModule } from '../../_components/header/header.module';
import { SidebarModule } from '../../_components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    RoutePlaygroundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule
  ]
})
export class RoutePlaygroundModule { }
