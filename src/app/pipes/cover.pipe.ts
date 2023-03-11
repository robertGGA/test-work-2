import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cover'
})
export class CoverPipe implements PipeTransform {

  transform(id: number | string): string {
    return `images/${id}.jpeg`;
  }

}
