import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { Component21Component } from './components/component21/component21.component';
import { Component22Component } from './components/component22/component22.component';


@NgModule({
  declarations: [
    Component21Component,
    Component22Component
  ],
  imports: [
    CommonModule,
    Test2RoutingModule
  ]
})
export class Test2Module { }
