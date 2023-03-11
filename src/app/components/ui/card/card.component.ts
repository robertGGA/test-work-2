import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IFilm} from "@models/film";

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

  isFavFilm(): boolean {
    return this.activeFilm === this.data.id;
  }

  setFavFilm(id: number): void {
    this.setActiveFilm.next(id);
  }

  getImagePath(): string {
    return `images/${this.data.id.toString()}.jpeg`
  }

}
