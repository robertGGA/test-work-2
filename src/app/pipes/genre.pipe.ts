import {Pipe, PipeTransform} from '@angular/core';
import {GenreEnum} from "@models/genreEnum";

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: Array<number>, separator?: string): string {
    let result = '';

    value.forEach((number) => {
      if (number - 1 >= 11 || number - 1 < 0) {
        result += 'неизвестный жанр' + (separator ? `${separator} ` : ' ');
      } else {
        result += `${GenreEnum[number - 1]}` + (separator ? `${separator} ` : ' ')
      }
    })

    return result[result.length - 2] === separator ? result.substring(0, result.length - 2) : result.trimEnd();
  }

}
