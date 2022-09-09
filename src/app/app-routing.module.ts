import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test-1module',
  },
  {
    path: '**',
    redirectTo: 'test-1module',
  },
  {
    path: 'test1-module',
    loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module),
  },
  {
    path: 'test2-module',
    loadChildren: () => import('./modules/test2/test2.module').then(m => m.Test2Module),
  },
  {
    path: 'test3-module',
    loadChildren: () => import('./modules/test3/test3.module').then(m => m.Test3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
