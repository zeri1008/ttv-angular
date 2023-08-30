import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLanguage: boolean;
  isProfile: boolean;  

  constructor(
    private router: Router,
  ) {
    this.isLanguage = false;
    this.isProfile = false;
  }

  ngOnInit(): void { }

  onClickRouter(url: string) {
    this.router.navigate([url]);
  }

  // 여러 메뉴가 다 열린상태를 유지할 수 있게 할 방법에 대해서 고려해봐야함.
  onClickDropBox(type: string): void {
    if (type === 'language') {
      this.isLanguage = !this.isLanguage;
    } else if (type === 'profile') {
      this.isProfile = !this.isProfile;
    }
  }
}
