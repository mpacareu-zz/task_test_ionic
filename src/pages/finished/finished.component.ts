import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';
import { AddPage } from '../add/add.component';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage {
  constructor(
    public taskService: TaskService,
    private navCtrl: NavController
  ) {}

  itemSelected(item: List) {
    console.log(`este es el item de la lista ${item}`);
    this.navCtrl.push(AddPage, {
      title: item.title,
      items: item
    });
  }

  removeList(list: List) {
    this.taskService.removeList(list);
  }
}
