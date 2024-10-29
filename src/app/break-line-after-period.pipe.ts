import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLineAfterPeriod',
  standalone: true
})
export class BreakLineAfterPeriodPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
