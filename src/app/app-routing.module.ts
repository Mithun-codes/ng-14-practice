import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./modules/layout/components/user/user.component";

const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: 'full', },
  {
    path: 'module1', component: UserComponent,
    children: [{ path: '', loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module) }],
  },
  {
    path: 'module2', component: UserComponent,
    children: [{ path: '', loadChildren: () => import('./modules/test2/test2.module').then(m => m.Test2Module) }],
  },
  {
    path: 'module3', component: UserComponent,
    children: [{ path: '', loadChildren: () => import('./modules/test3/test3.module').then(m => m.Test3Module) }],
  },
  { path: '**', redirectTo: 'module1', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
