import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultOwner = [];
    for (const owner of value) {
      if (owner.first_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultOwner.push(owner);
      }
    }
    return resultOwner;
  }
}
