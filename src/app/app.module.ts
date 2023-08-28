import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteMainModule } from './_routes/route-main/route-main.module';
import { RoutePlaygroundModule } from './_routes/route-playground/route-playground.module';
import { RouteGalleryModule } from './_routes/route-gallery/route-gallery.module';
import { RouteBoardsModule } from './_routes/route-boards/route-boards.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteMainModule,
    RoutePlaygroundModule,
    RouteGalleryModule,
    RouteBoardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

