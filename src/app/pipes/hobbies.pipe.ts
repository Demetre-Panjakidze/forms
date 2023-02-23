import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hobbies'
})
export class HobbiesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
