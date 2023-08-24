import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePlaygroundComponent } from './route-playground.component';
import { HeaderModule } from '../../_components/header/header.module';
import { SidebarModule } from '../../_components/sidebar/sidebar.module';
import { PlaygroundHomeModule } from './playground-home/playground-home.module';



@NgModule({
  declarations: [
    RoutePlaygroundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    PlaygroundHomeModule
  ]
})
export class RoutePlaygroundModule { }
