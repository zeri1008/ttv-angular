import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClickRouter(url: string) {
    this.router.navigate([url]);
  }

  isLanguage: boolean = false;
  isProfile: boolean = false;

  onClickDropBox(type: string): void {
    if (type === 'language') {
      this.isLanguage = !this.isLanguage;
      this.isProfile = false;
    } else if (type === 'profile') {
      this.isProfile = !this.isProfile;
      this.isLanguage = false; 
    }
  }

  
}
