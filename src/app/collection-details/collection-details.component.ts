import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss'],
})
export class CollectionDetailsComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('nasa_id');
    console.log(this.id);
    this.loadDetails();
  }
  loadDetails() {
    let json = window.localStorage.getItem('list') || '';
    let list = JSON.parse(json);
    let a = list.find((e: any) => e.data[0].nasa_id == this.id);
    console.log(a);
  }
}
