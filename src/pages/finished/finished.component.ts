import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage {
  constructor(
    public taskService: TaskService,
    private navCtrl: NavController
  ) {}
}
