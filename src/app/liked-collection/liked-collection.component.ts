import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-collection',
  templateUrl: './liked-collection.component.html',
  styleUrls: ['./liked-collection.component.scss'],
})
export class LikedCollectionComponent implements OnInit {
  constructor() {}
  listUnlike: any;
  list: any;
  ngOnInit(): void {
    this.loadDataLiked();
  }
  loadDataLiked() {
    let data = window.localStorage.getItem('likedList') || '';
    this.listUnlike = JSON.parse(data);
    console.log(this.listUnlike);
  }
  loadList() {
    let data = JSON.stringify(this.list);
    localStorage.setItem('list', data);
  }
  unLikedData(e: any) {
    let index = this.listUnlike.findIndex((itemUnLike: any) => {
      return itemUnLike?.data[0].nasa_id == e?.data[0].nasa_id;
    });
    this.listUnlike.splice(index, 1);
    localStorage.setItem('removedList', JSON.stringify(this.listUnlike));

    this.loadList();
    let itemUnlike = localStorage.getItem('list') || '';
    console.log(itemUnlike);
    if (itemUnlike) {
      let dataUnlike = JSON.parse(itemUnlike);
      e.removed = false;
      dataUnlike.push(e);
      localStorage.setItem('list', JSON.stringify(dataUnlike));
    } else {
      let unlike: any[] = [];
      unlike.push(e);
      let b = JSON.stringify(unlike);
      localStorage.setItem('list', b);
    }
  }
}
