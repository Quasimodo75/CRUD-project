import { Pipe, PipeTransform } from '@angular/core';
import { Items } from './interfaces/items';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Items[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }

}
