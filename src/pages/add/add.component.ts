import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';
import { NavParams } from 'ionic-angular';
import { ListIItem } from '../../models';

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {
  list: List;
  itemName: string = '';
  listItem: ListIItem = null;
  constructor(public taskService: TaskService, navParams: NavParams) {
    console.log(navParams);
    this.list = new List(navParams.get('title'));

    this.taskService.addList(this.list);
  }

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }
    this.listItem = new ListIItem(this.itemName);
    this.list.items.push(this.listItem);
    this.itemName = '';
  }
  updateTask(item: ListIItem) {
    item.completed = !item.completed;
  }

  removeTask(index: number) {
    this.list.items.splice(index, 1);

    // this.list.items =
    //   index > -1
    //     ? [
    //         ...this.list.items.slice(0, index),
    //         ...this.list.items.slice(index + 1)
    //       ]
    //     : this.list.items;
  }
}
