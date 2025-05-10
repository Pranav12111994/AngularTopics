import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {

  transform(items: string[], searchTerm: string): string[] {
    console.log('Impure Pipe called');
    if (!items || !searchTerm) {
      return items; 
    }
    return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
