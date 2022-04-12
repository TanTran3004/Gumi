import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss'],
})
export class EditCollectionComponent implements OnInit {
  @Input() id: string = '';
  private collection: any;
  public title: string = '';
  private list: any;
  private index: any;
  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {
    let json = window.localStorage.getItem('list') || '';
    this.list = JSON.parse(json);
    this.index = this.list.findIndex((element: any) => {
      console.log(element.data[0].nasa_id, this.id);
      return element.data[0].nasa_id == this.id;
    });
    this.title = this.list[this.index].data[0].title;
    console.log(this.collection);
  }
  submit() {
    console.log(this.id);
    this.list[this.index].data[0].title = this.title;
    localStorage.setItem('list', JSON.stringify(this.list));
    this.ngbActiveModal.close(true);
  }
}
