import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleformat'
})
export class TitleformatPipe implements PipeTransform {

  transform(value: string): string {
    var regex = /(\b[a-z](?!\s))/g;
    let result = value
    result = result.replace(regex, function(word){
      return word.toUpperCase();
    });
    return result;
  }

}
