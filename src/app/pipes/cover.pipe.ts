import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cover'
})
export class CoverPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
