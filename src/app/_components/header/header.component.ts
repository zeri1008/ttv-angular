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

  // 다른 요소 클릭했을 때 드롭다운 메뉴 닫히도록 해주어야 함.
  onClickDropBox(type: string): void {
    if (type === 'language') {
      this.isLanguage = !this.isLanguage;
      // this.isProfile = false; (필요 없는 작업입니다.)
    } else if (type === 'profile') {
      this.isProfile = !this.isProfile;
      // this.isLanguage = false; 
    }
  }
}
