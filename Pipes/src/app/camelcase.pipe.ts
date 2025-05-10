import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    const word = value.trim().split(/\s+/);
    return word.map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' '); 
  }

}
