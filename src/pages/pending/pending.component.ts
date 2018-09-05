import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';
import { AddPage } from '../add/add.component';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pending',
  templateUrl: 'pending.component.html'
})
export class PendingPage {
  constructor(
    public taskService: TaskService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  itemSelected(item: List) {
    console.log(`este es el item de la lista ${item}`);
    this.navCtrl.push(AddPage, {
      title: item.title,
      items: item
    });
  }

  addList() {
    const alert = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista a crear',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Agregar',
          handler: data => {
            this.navCtrl.push(AddPage, {
              title: data.title
            });
          }
        }
      ]
    });
    alert.present();
  }

  removeList(list: List) {
    this.taskService.removeList(list);
  }
}
