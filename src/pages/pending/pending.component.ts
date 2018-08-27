import { Component} from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {

    constructor( public taskService: TaskService){

    }
}