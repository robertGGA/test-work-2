import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FilmService} from "@services/film.service";
import {takeUntil} from "rxjs";
import {DestroyService} from "@services/destroy.service";
import {IFilm} from "@models/film";
import {localStorageService} from "@utils/local-storage";

@Component({
  selector: 'rg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  title = 'test-task';

  films!: Array<IFilm>
  favFilm: number | null | undefined;

  constructor(private filmService: FilmService,
              private destroy$: DestroyService,
              private cdr: ChangeDetectorRef) {
    filmService.getFilms().pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.films = value;
      this.favFilm = Number(window.localStorage.getItem('favourite-film'));
      this.cdr.markForCheck();
    });
  }

  setFavFilm(id: number): void {
    if (id !== this.favFilm) {
      this.favFilm = id;
      localStorageService.setStorageValue('favourite-film', id);
    } else {
      this.favFilm = null;
      localStorageService.clearStorageByKey('favourite-film');
    }
  }

  getFavFilm(): IFilm | undefined {
    return this.films.find(value => this.favFilm === value.id);
  }
}
