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
    console.log(navParams.get('items'));

    if (navParams.get('items')) {
      this.list = navParams.get('items');
    } else {
      this.list = new List(navParams.get('title'));
      this.taskService.addList(this.list);
    }
  }

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }
    this.listItem = new ListIItem(this.itemName);
    this.list.items.push(this.listItem);
    this.taskService.saveStorage();
    this.itemName = '';
  }
  updateTask(item: ListIItem) {
    item.completed = !item.completed;

    const pendingItemsCount = this.list.items.filter(item => {
      return !item.completed;
    }).length;

    console.log(pendingItemsCount);

    if (pendingItemsCount === 0) {
      this.list.finished = true;
      this.list.endDate = new Date();
    } else {
      this.list.finished = false;
      this.list.endDate = null;
    }

    this.taskService.saveStorage();
  }

  removeTask(index: number) {
    this.list.items.splice(index, 1);
    this.taskService.saveStorage();

    // this.list.items =
    //   index > -1
    //     ? [
    //         ...this.list.items.slice(0, index),
    //         ...this.list.items.slice(index + 1)
    //       ]
    //     : this.list.items;
  }
}
