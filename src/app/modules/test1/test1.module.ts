import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Test1RoutingModule} from './test1-routing.module';
import {Component11Component} from './components/component11/component11.component';
import {Component12Component} from './components/component12/component12.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {Test1ApiService} from "./services/test1-api.service";


@NgModule({
  declarations: [
    Component11Component,
    Component12Component
  ],
  imports: [
    CommonModule,
    Test1RoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    Test1ApiService,
  ]
})
export class Test1Module {
}
