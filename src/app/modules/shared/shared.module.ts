import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoService } from "./services/demo.service";



@NgModule({
  declarations: [
    DemoPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DemoService
  ]
})
export class SharedModule { }
