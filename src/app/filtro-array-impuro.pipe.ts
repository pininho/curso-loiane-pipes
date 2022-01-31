import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  transform(value: any, ...args: any[]): any {
    if(value.length == 0 || args == undefined) {
      return value;
    }

    let filter = args.toLocaleString().toLocaleLowerCase();

    return value.filter(
      v => v.toLocaleLowerCase().includes(filter)
    );
  }

}
