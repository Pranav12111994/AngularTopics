import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  pure: true
})
export class PurePipePipe implements PipeTransform {

  transform(value: string): string {
    console.log('Pure Pipe called');
    return value.toUpperCase();
  }

}
