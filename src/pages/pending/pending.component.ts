import { Component} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';
import { AddPage } from '../add/add.component';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {


    constructor( public taskService: TaskService,
                 private navCtrl: NavController){

    }

    itemSelected(item: List){
        console.log( `este es el item de la lista ${item.title}` );

    }

    addList(){
        this.navCtrl.push( AddPage);

    }
}