import {ChangeDetectionStrategy, Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IFilm} from "@models/film";
import {FilmService} from "@services/film.service";
import {DestroyService} from "@services/destroy.service";
import {takeUntil} from "rxjs";

export interface ModalData {
  film: IFilm,
  emitter: EventEmitter<number>
}

@Component({
  selector: 'rg-modal-film',
  templateUrl: './modal-film.component.html',
  styleUrls: ['./modal-film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFilmComponent {

  isActive!: boolean;
  film!: IFilm;
  emitter!: EventEmitter<number>;

  constructor(private dialogRef: MatDialogRef<ModalFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ModalData,
              private filmService: FilmService,
              private destroy$: DestroyService) {
    this.filmService.getFavFilm().pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.isActive = this.data.film.id === value;
    })
    this.film = data.film;
    this.emitter = data.emitter;
  }

  closeModal() {
    this.dialogRef.close();
  }

  setFavFilm() {
    this.filmService.setFavFilm(this.film.id);
  }


}
