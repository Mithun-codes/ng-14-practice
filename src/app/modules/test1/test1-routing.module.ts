import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component11Component } from "./components/component11/component11.component";
import { Component12Component } from "./components/component12/component12.component";

const routes: Routes = [
  { path: '', redirectTo: 'cmt11', pathMatch: 'full', },
  { path: 'cmt11', component: Component11Component, },
  { path: 'cmt12', component: Component12Component, },
  { path: '**', redirectTo: 'cmt11', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }
