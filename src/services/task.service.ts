import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class TaskService{

    list: List[] = [];

    constructor(){
        const list1 = new List ( 'Recolectar piedras');
        const list2 = new List ( 'Heroes a vencer');

        this.list.push(list1, list2);
        console.log( this.list);
    }
}