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
      // Adiciona condição para ponto seguido de espaço ou final da string
      const modifiedSearch = new RegExp(`\\${search}(?=\\s|$)`, 'g');
      return value.replace(modifiedSearch, replacement);
    }
    
    return value; 
  }
}
