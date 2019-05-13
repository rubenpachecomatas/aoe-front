import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultCivs = [];
    for(const civ of value) {
      if (civ.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCivs.push(civ);
      };
    };
    return resultCivs;
  }

}
