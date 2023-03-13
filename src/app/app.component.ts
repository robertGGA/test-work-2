import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FilmService} from "@services/film.service";
import {map, startWith, switchMap, takeUntil} from "rxjs";
import {DestroyService} from "@services/destroy.service";
import {IFilm} from "@models/film";
import {FormBuilder, FormGroup} from "@angular/forms";
import {genres} from "@models/genreEnum";
import {toArray} from "@utils/objectArray";

@Component({
  selector: 'rg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-task';

  films!: Array<IFilm>;
  favFilm: number | null | undefined;
  genresMap = toArray(genres);


  form: FormGroup;

  constructor(private filmService: FilmService,
              private destroy$: DestroyService,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      search: [''],
      select: [[]]
    });

    this.genresMap.unshift({id: this.genresMap.length + 1, value: 'Все'});

    this.filmService.getFavFilm()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.favFilm = value;
        this.cdr.markForCheck();
      });

    this.form.valueChanges.pipe(
      startWith(this.form.value),
      map(({search, select}) => {
        if (select.includes(this.genresMap.length)) {
          this.form.patchValue({search: search, select: []});
          return ({
            search: search.toLowerCase(),
            select: []
          });
        }
        return ({
          search: search.toLowerCase(),
          select
        })
      }),
      switchMap(({search, select}) =>
        this.filmService.getFilms().pipe(
          map(items =>
            items.filter(item => item.name.toLowerCase().includes(search))
              .filter(item => item.genre.join(',').includes(select.join(',')))
          )
        )
      )
    ).subscribe(value => {
      this.films = value;
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
