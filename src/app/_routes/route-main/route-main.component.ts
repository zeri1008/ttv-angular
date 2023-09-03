import { Component, ViewChild, OnInit, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';

@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.scss']
})
export class RouteMainComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef, static: false })
  contentTab: ViewContainerRef;

  _tabs: {
    [tab: string]: ComponentType<MainHomeComponent>;
  };

  _currentRoute: string;

  constructor(
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this._tabs = {
      '/': MainHomeComponent,
    };

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this._currentRoute = event.url;
      }
    });
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderContent();
  }

  renderContent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this._tabs[this._currentRoute]
      );

    this.contentTab
      .createComponent(componentFactory)
      .changeDetectorRef.detectChanges();
  }

}
