import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  list: any;
  ngOnInit(): void {
    this.loadDataByLocal();
  }
  loadDataByLocal() {
    let json = window.localStorage.getItem('list') || '';
    this.list = JSON.parse(json);
    console.log(this.list);
  }
  outputIsClickLike(e: any) {
    let index = this.list.findIndex((item: any) => {
      return item?.href == e?.href;
    });
    console.log('index', index);

    this.list[index].islike = !this.list[index].islike;

    console.log(this.list);
    this.saveLoc();
  }
  outputIsClickRm(itemIn: any) {
    let index = this.list.findIndex((item: any) => {
      return item?.href == itemIn?.href;
    });
    this.list.splice(index, 1);
    this.saveLoc();
    let itemRemove = localStorage.getItem('removedList') || '';
    console.log(itemRemove);
    if (itemRemove) {
      let a = JSON.parse(itemRemove);
      a.push(itemIn);
      localStorage.setItem('removedList', JSON.stringify(a));
    } else {
      console.log('b');
      let m: any[] = [];
      m.push(itemIn);
      let b = JSON.stringify(m);
      localStorage.setItem('removedList', b);
    }
  }

  saveLoc() {
    let a = JSON.stringify(this.list);

    localStorage.setItem('list', a);
  }
}
