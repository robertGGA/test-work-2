import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IFilm} from "@models/film";
import {MatDialog} from "@angular/material/dialog";
import {ModalFilmComponent} from "@components/ui/modal-film/modal-film.component";

@Component({
  selector: 'rg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input('film') data!: IFilm;
  @Input() activeFilm?: number | null;
  @Output() setActiveFilm: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  isFavFilm(): boolean {
    return this.activeFilm === this.data.id;
  }

  setFavFilm(e: Event): void {
    e.stopPropagation();
    this.setActiveFilm.next(this.data.id);
  }

  openModal() {
    this.dialog.open(ModalFilmComponent,
      {
        data: {film: this.data, emitter: this.setActiveFilm},
        panelClass: 'modal'
      }
    )
  }

}
