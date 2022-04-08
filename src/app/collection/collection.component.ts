import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collection: any;

  @Output() isClickLike = new EventEmitter<any>();
  @Output() isRemoveCol = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    // console.log(this.collection);
    // this.collection.islike = true;
    this.isClickLike.emit(this.collection);
  }
  removeCol() {
    console.log('Vào đây!!!');
    console.log(this.isRemoveCol);

    this.isRemoveCol.emit(this.collection);
  }
}
