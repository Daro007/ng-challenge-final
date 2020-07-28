import { Pipe, PipeTransform } from '@angular/core';
// import { Moment } from 'moment/moment';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '';
    } else {
      // var start = Moment(value);
      // var end = moment('2013-11-04');
      // end.diff(start, 'days');
      const currentDate = new Date();
      const strCurrentDate = currentDate.toString();
      var diff = Math.floor(
        (Date.parse(value) - Date.parse(strCurrentDate)) / 86400000
      );
      console.log(strCurrentDate);
      console.log(currentDate.getDate());
      console.log(currentDate.getMonth());
      console.log(currentDate.getFullYear());

      // console.log(value);
      // console.log(diff);
      // console.log(start);
    }
  }
}
