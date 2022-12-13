import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorHomeComponent } from './actor-home/actor-home.component';



@NgModule({
  declarations: [
    ActorHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ActorHomeComponent]
})
export class ActorsModule { }
