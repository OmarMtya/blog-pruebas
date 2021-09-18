import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postTimer'
})
export class PostTimerPipe implements PipeTransform {

  transform(value: Date): string {
    return "Palabra";
  }

}
