import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test3RoutingModule } from './test3-routing.module';
import { Component31Component } from './components/component31/component31.component';
import { Component32Component } from './components/component32/component32.component';
import { Component38Component } from './components/component38/component38.component';
import { Component39Component } from './components/component39/component39.component';

import {ShareService} from "./sevices/share.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Component31Component,
    Component32Component,
    Component38Component,
    Component39Component
  ],
  imports: [
    FormsModule,
    CommonModule,
    Test3RoutingModule,
  ],
  providers: [
    ShareService
  ]
})
export class Test3Module { }
