import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hobbies',
})
export class HobbiesPipe implements PipeTransform {
  hobbies: string[] = [
    'Playing chess',
    'hiking',
    'listening to music',
    'reading',
    'smoking',
    'playing football',
    'watching football',
  ];
  transform(
    arr: any,
    used: (string | null)[] | undefined,
    self: string | null
  ) {
    return this.hobbies.filter((x) => {
      if (!used?.includes(x) || x === self) {
        return true;
      }
      return false;
    });
  }
}
