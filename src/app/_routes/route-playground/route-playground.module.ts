import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePlaygroundComponent } from './route-playground.component';
import { HeaderModule } from '../../_components/header/header.module';
import { SidebarModule } from '../../_components/sidebar/sidebar.module';
import { PlaygroundHomeModule } from './playground-home/playground-home.module';
import { TextToImageModule } from 'src/app/_components/text-to-image/text-to-image.module';
import { ImgRightbarModule } from 'src/app/_components/img-rightbar/img-rightbar.module';



@NgModule({
  declarations: [
    RoutePlaygroundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    PlaygroundHomeModule,
    TextToImageModule,
    ImgRightbarModule
  ]
})
export class RoutePlaygroundModule { }
