import { ListIItem } from './list-item.model';


export class List{

    id: number;
    title: string;
    creationDate: Date;
    endDate: Date;
    finished: boolean;
    items: ListIItem [];

    constructor( title: string ){

        this.title = title;
        this.finished =  false;
        this.creationDate = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }

}