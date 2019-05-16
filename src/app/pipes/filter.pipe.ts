import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  civ;

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim();
    return items.filter(it => {
      this.civ = it.name;
      return this.civ.toLowerCase().includes(searchText);
    });
  }

}
