import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advance'
})
export class AdvancePipe implements PipeTransform {

  transform(value: string): string {
    return value+' (Advance)';
  }

}
