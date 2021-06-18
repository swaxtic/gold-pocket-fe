import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(date: Date, format: string = 'dddd, DD MMMM YYYY'): string {
    const output = dayjs(date);
    return output.locale(id).format(format);
  }

}
