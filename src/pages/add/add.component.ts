import { Component} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';

@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html'
})
export class AddPage {


    constructor( public taskService: TaskService){

    }

}