import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restore-collection',
  templateUrl: './restore-collection.component.html',
  styleUrls: ['./restore-collection.component.scss'],
})
export class RestoreCollectionComponent implements OnInit {
  constructor() {}
  listRemoved: any;
  list: any;
  ngOnInit(): void {
    this.loadDataRemoved();
  }
  loadDataRemoved() {
    let data = window.localStorage.getItem('removedList') || '';
    this.listRemoved = JSON.parse(data);
    console.log(this.listRemoved);
  }
  loadList() {
    let data = JSON.stringify(this.list);
    localStorage.setItem('list', data);
  }
  undoData(e: any) {
    let index = this.listRemoved.findIndex((itemUd: any) => {
      return itemUd?.data[0].nasa_id == e?.data[0].nasa_id;
    });
    this.listRemoved.splice(index, 1);
    localStorage.setItem('removedList', JSON.stringify(this.listRemoved));

    this.loadList();
    let itemAdd = localStorage.getItem('list') || '';
    console.log(itemAdd);
    if (itemAdd) {
      let dataUndo = JSON.parse(itemAdd);
      e.removed = false;
      dataUndo.push(e);
      localStorage.setItem('list', JSON.stringify(dataUndo));
    } else {
      let undo: any[] = [];
      undo.push(e);
      let b = JSON.stringify(undo);
      localStorage.setItem('list', b);
    }
  }
}
