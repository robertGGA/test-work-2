import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IFilm} from "@models/film";
import {localStorageService} from "@utils/local-storage";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  favouriteFilm$: BehaviorSubject<number | null>
    = new BehaviorSubject<number | null>(Number(window.localStorage.getItem('favourite-film')));

  getFilms(): Observable<Array<IFilm>> {
    return this.http.get<Array<IFilm>>('assets/data.json');
  }

  setFavFilm(id: number): void {
    if (this.favouriteFilm$.getValue() === id ) {
      this.favouriteFilm$.next(null);
      localStorageService.clearStorageByKey('favourite-film');
    } else {
      this.favouriteFilm$.next(id);
      localStorageService.setStorageValue('favourite-film', id);
    }
  }

  getFavFilm(): Observable<number | null> {
    return this.favouriteFilm$;
  }


}
