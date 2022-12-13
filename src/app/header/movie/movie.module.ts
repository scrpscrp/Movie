import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieHomeComponent } from './movie-home/movie-home.component';


@NgModule({
  declarations: [
    MovieHomeComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports: [MovieHomeComponent],
})
export class MovieModule { }
