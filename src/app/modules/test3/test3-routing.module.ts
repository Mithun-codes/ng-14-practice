import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component31Component } from "./components/component31/component31.component";
import { Component32Component } from "./components/component32/component32.component";

const routes: Routes = [
  { path: '', redirectTo: 'cmt31', pathMatch: 'full', },
  { path: 'cmt31', component: Component31Component, },
  { path: 'cmt32', component: Component32Component, },
  { path: '**', redirectTo: 'cmt31', },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test3RoutingModule { }
