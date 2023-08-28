import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('VideoList') videoListRef: ElementRef;
  @ViewChild('ImageList') ImageListRef: ElementRef;

  menuType: string;

  constructor() {
    this.menuType = '';
  }

  ngOnInit(): void {}

  isMenuOpen = false;

  toggleMenu(menuType: string) {
    this.menuType = menuType;
    this.isMenuOpen = !this.isMenuOpen;
  }
}

