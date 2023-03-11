import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import {AppComponent} from './app.component';
import {HeaderComponent} from '@components/ui/header/header.component';
import {CardComponent} from '@components/ui/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { GenrePipe } from './pipes/genre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    GenrePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
