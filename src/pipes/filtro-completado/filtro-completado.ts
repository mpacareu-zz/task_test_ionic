import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/list.model';

/**
 * Generated class for the FiltroCompletadoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: List[], completed: boolean) {
    return list.filter(item => {
      return item.finished === completed;
    });
  }
}
