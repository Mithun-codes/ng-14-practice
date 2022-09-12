import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
