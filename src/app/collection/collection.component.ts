import { EditCollectionComponent } from './../edit-collection/edit-collection.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  @Input() collection: any;

  @Output() isClickLike = new EventEmitter<any>();
  @Output() isRemoveCol = new EventEmitter<any>();
  @Output() isEditCol = new EventEmitter<any>();
  @Output() isUndoOutput = new EventEmitter<any>();
  @Output() isUnlikeOutput = new EventEmitter<any>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  handleClick() {
    // console.log(this.collection);
    // this.collection.islike = true;
    this.isClickLike.emit(this.collection);
  }
  removeCol() {
    console.log(this.isRemoveCol);
    this.isRemoveCol.emit(this.collection);
  }
  editCol() {
    let modalRef = this.modalService.open(EditCollectionComponent);
    modalRef.componentInstance.id = this.collection.data[0].nasa_id;
    modalRef.result.then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  }
  undoCol() {
    this.isUndoOutput.emit(this.collection);
  }
  unLikeCol() {
    this.isUnlikeOutput.emit(this.collection);
  }
}
