import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JimboHomeComponent } from './jimbo-home/jimbo-home.component';
import { JimboRoutingModule } from './jimbo-routing.module';



@NgModule({
  declarations: [
    JimboHomeComponent
  ],
  imports: [
    CommonModule,
    JimboRoutingModule
  ],
  exports: [JimboModule]
 
})
export class JimboModule { }
