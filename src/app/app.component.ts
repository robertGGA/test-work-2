import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FilmService} from "@services/film.service";
import {takeUntil} from "rxjs";
import {DestroyService} from "@services/destroy.service";
import {IFilm} from "@models/film";

@Component({
  selector: 'rg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-task';

  films!: Array<IFilm>
  favFilm: number | null | undefined;

  constructor(private filmService: FilmService,
              private destroy$: DestroyService,
              private cdr: ChangeDetectorRef) {
    filmService.getFilms().pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.films = value;
      this.cdr.markForCheck();
    });

    this.filmService.getFavFilm()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.favFilm = value;
        this.cdr.markForCheck();
      })
  }

  setFavFilm(id: number): void {
    this.filmService.setFavFilm(id);
  }

  getFavFilm(): IFilm | undefined {
    return this.films.find(value => this.favFilm === value.id);
  }
}
