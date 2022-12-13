
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainSearchModule } from './main-search/main-search.module';
import { SharedCompComponent } from './shared/shared-comp/shared-comp.component';







@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MainSearchModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
