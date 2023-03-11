import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFilm} from "@models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Array<IFilm>> {
    return this.http.get<Array<IFilm>>('assets/data.json');
  }

  setFavFilm() {

  }
}
