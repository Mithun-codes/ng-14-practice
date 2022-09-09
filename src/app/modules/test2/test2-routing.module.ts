import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component21Component } from "./components/component21/component21.component";
import { Component22Component } from "./components/component22/component22.component";

const routes: Routes = [
  { path: '', redirectTo: 'cmt21', },
  { path: '**', redirectTo: 'cmt21', },
  { path: 'cmt21', component: Component21Component, },
  { path: 'cmt22', component: Component22Component, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test2RoutingModule { }
