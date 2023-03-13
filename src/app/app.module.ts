import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import {AppComponent} from './app.component';
import {HeaderComponent} from '@components/ui/header/header.component';
import {CardComponent} from '@components/ui/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import {GenrePipe} from './pipes/genre.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalFilmComponent} from '@components/ui/modal-film/modal-film.component';
import {ModalHeaderComponent} from "@components/ui/modal-header/modal-header.component";
import {ModalBodyComponent} from "@components/ui/modal-body/modal-body.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import { CoverPipe } from './pipes/cover.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    GenrePipe,
    ModalFilmComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    CoverPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
