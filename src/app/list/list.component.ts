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
    // this.searchWithNewest();
  }
  loadDataByLocal() {
    let json = window.localStorage.getItem('list') || '';
    this.list = JSON.parse(json);
    console.log(this.list);
  }
  outputIsClickLike(e: any) {
    let index = this.list.findIndex((item: any) => {
      return item?.data[0].nasa_id == e?.data[0].nasa_id;
    });
    console.log('index', index);

    // this.list[index].islike = !this.list[index].islike;

    this.list.splice(index, 1);
    this.saveLoc();
    let itemLike = localStorage.getItem('likedList') || '';
    if (itemLike) {
      console.log('have');
      let liked = JSON.parse(itemLike);
      e.islike = true;
      liked.push(e);
      console.log(liked);
      localStorage.setItem('likedList', JSON.stringify(liked));
    } else {
      let m: any[] = [];
      m.push(e);
      let b = JSON.stringify(m);
      localStorage.setItem('likedList', b);
    }
  }
  outputIsClickRm(itemIn: any) {
    let index = this.list.findIndex((item: any) => {
      return item?.data[0].nasa_id == itemIn?.data[0].nasa_id;
    });
    this.list.splice(index, 1);
    this.saveLoc();
    let itemRemove = localStorage.getItem('removedList') || '';
    console.log(itemRemove);
    if (itemRemove) {
      let a = JSON.parse(itemRemove);
      itemIn.removed = true;
      a.push(itemIn);
      localStorage.setItem('removedList', JSON.stringify(a));
    } else {
      let m: any[] = [];
      m.push(itemIn);
      let b = JSON.stringify(m);
      localStorage.setItem('removedList', b);
    }
  }
  outputIsClickEd(itemEd: any) {}

  saveLoc() {
    let a = JSON.stringify(this.list);

    localStorage.setItem('list', a);
  }
  search(sort: any) {
    if (sort == 'oldest') {
      this.list = this.list.sort((a: any, b: any) => {
        let c = new Date(a.data[0].date_created).getTime();
        let d = new Date(b.data[0].date_created).getTime();
        return c - d;
      });
    } else if (sort == 'newest') {
      this.list = this.list.sort((a: any, b: any) => {
        let c = new Date(a.data[0].date_created).getTime();
        let d = new Date(b.data[0].date_created).getTime();
        return d - c;
      });
    } else if (sort == 'aToZ') {
      this.list = this.list.sort((a: any, b: any) => {
        let c = a.data[0].title.toLowerCase();
        let d = b.data[0].title.toLowerCase();
        if (c < d) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sort == 'zToA') {
      this.list = this.list.sort((a: any, b: any) => {
        let c = a.data[0].title.toLowerCase();
        let d = b.data[0].title.toLowerCase();
        if (d < c) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    console.log(this.list);
  }
}
