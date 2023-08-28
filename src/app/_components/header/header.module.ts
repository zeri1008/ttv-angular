import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LanguagesModule } from './languages/languages.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [HeaderComponent], /* 여기에는 컴포넌트 추가하면 안됩니다. */
  exports: [HeaderComponent], /* 여기에도 마찬가지로 다른 컴포넌트 export 안해도 됩니다.  
  프로필 모듈에 있는 declarations, exports 에 컴포넌트를 추가하고, 여기엔 import만 해주면 됩니다*/
  imports: [
    CommonModule, 
    LanguagesModule,
    ProfileModule
  ]
})
export class HeaderModule { }
