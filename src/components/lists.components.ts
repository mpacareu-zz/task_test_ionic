import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { List } from '../models/list.model';
import { AddPage } from '../pages/add/add.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.components.html'
})
export class ListsComponent {
  @Input()
  finished: boolean = false;

  constructor(
    public taskService: TaskService,
    private navCtrl: NavController,
    private ctrlAlert: AlertController
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

  editList(list: List, slidingItem: ItemSliding) {
    slidingItem.close();
    const alert = this.ctrlAlert.create({
      title: 'Editar nombre',
      message: 'Editar el nombre de la lista',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nombre de la lista',
          value: list.title
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.taskService.saveStorage();
          }
        }
      ]
    });
    alert.present();
  }
}
