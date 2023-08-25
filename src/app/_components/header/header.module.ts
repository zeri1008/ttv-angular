import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IsprofileComponent } from './isprofile/isprofile.component';
import { IslanguageComponent } from './islanguage/islanguage.component';
import { IslanguageModule } from './islanguage/islanguage.module';
import { IsprofileModule } from './isprofile/isprofile.module';

@NgModule({
  declarations: [HeaderComponent, IsprofileComponent, IslanguageComponent],
  exports: [HeaderComponent, IslanguageComponent, IsprofileComponent],
  imports: [CommonModule, IslanguageModule, IsprofileModule]
})
export class HeaderModule { }
