import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePlaygroundComponent } from './route-playground.component';
import { HeaderModule } from '../../_components/header/header.module';
import { SidebarModule } from '../../_components/sidebar/sidebar.module';
import { ImgRightbarComponent } from 'src/app/_components/img-rightbar/img-rightbar.component';

@NgModule({
  declarations: [RoutePlaygroundComponent, ImgRightbarComponent],
  imports: [CommonModule, HeaderModule, SidebarModule],
})
export class RoutePlaygroundModule {}
