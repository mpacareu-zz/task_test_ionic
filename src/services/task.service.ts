import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class TaskService{

    list: List[] = [];

    constructor(){
        const task1 = new List ( 'Recolectar piedras');
        const task2 = new List ( 'Heroes a vencer');

        this.list.push(task1, task2);
        console.log( this.list);
    }
}