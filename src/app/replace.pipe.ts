import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
  standalone: true
})
export class ReplacePipe implements PipeTransform {
  transform(value: any, search: string, replacement: string): string {
  
    if (Array.isArray(value)) {
      return value.join(replacement); 
    }

    if (typeof value === 'string') {
      return value.replace(new RegExp(search, 'g'), replacement);
    }
    return value; 
  }
}