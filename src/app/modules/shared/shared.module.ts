import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {ApiService} from "./services/api/api.service";
import {DemoService} from "./services/demo/demo.service";

import {DemoPipe} from './pipes/demo.pipe';
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    DemoPipe,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DemoService,
  ],
  exports: [
    PopupComponent,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [ApiService]
    }
  }
}
