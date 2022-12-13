import { TvShowModule } from './tv-show/tv-show.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './headerComp/header.component';
import { MovieModule } from './movie/movie.module';
import { ActorsModule } from './actors/actors.module';
import { LogInModule } from './log-in/log-in.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { JimboModule } from './jimbo/jimbo.module';

import {MenubarModule} from 'primeng/menubar';
import { HeaderRoutingModule } from './header-routing.module';





@NgModule({
  declarations: [
    HeaderComponent,
  
  ],
  imports: [
    CommonModule,
    MovieModule,
    TvShowModule,
    ActorsModule,
    LogInModule,
    CreateAccountModule,
    JimboModule,
   
    MenubarModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
