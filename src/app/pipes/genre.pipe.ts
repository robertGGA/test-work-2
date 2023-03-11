import {Pipe, PipeTransform} from '@angular/core';
import {GenreEnum} from "@models/genreEnum";

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: Array<number>): string {
    let result = '';

    value.forEach(number => {
      if (number - 1 >= 11 || number - 1 < 0) {
        result += 'неизвестный жанр ';
      } else {
        result += `${GenreEnum[number - 1]} `
      }
    })

    return result.trimEnd();
  }

}
