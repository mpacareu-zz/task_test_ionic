import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class TaskService {
  list: List[] = [];

  constructor() {
    this.loadStorage();
  }
  
  addList(list:List){
    this.list.push(list);
    this.saveStorage();
    console.log(this.list);
    
  }

  saveStorage(){

    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadStorage(){
    if(localStorage.getItem('data')){
      this.list = JSON.parse(localStorage.getItem('data'));
    }
    else{
      this.list = [];
    }

  }

}
