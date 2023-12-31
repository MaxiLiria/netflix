import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { FilmsComponent } from './films/films.component';
import { GelleryComponent } from './gellery/gellery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    GelleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
