import { Component} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';

@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {
    constructor( public taskService: TaskService){

    }

    itemSelected(item: List){
        console.log( `este es el item de la lista ${item.title}` );

    }

}