import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test3RoutingModule } from './test3-routing.module';
import { Component31Component } from './components/component31/component31.component';
import { Component32Component } from './components/component32/component32.component';


@NgModule({
  declarations: [
    Component31Component,
    Component32Component
  ],
  imports: [
    CommonModule,
    Test3RoutingModule
  ]
})
export class Test3Module { }
