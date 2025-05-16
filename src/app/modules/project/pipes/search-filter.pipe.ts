import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '@project/models';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Project[], field: keyof Project, value: string): Project[] {
    if (!value) {
      return items;
    }

    return items.filter((item) => {
      if (typeof item[field] === 'string') {
        return item[field].toLowerCase().includes(value.toLowerCase());
      }

      return item[field] === (value === 'true');
    });
  }
}
