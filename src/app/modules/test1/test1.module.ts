import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Component11Component } from './components/component11/component11.component';
import { Component12Component } from './components/component12/component12.component';


@NgModule({
  declarations: [
    Component11Component,
    Component12Component
  ],
  imports: [
    CommonModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
