import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('VideoList') videoListRef: ElementRef;
  @ViewChild('ImageList') ImageListRef: ElementRef;

  menuType: string;

  constructor(
    private router: Router,
  ) {
    this.menuType = '';
  }

  ngOnInit(): void {}

  isMenuOpen = false;

  toggleMenu(menuType: string) {
    this.menuType = menuType;
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickRouter(url: string) {
    this.router.navigate([url]);
  }
}

