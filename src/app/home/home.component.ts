import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product: any = [];

  search: string = '';
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.search = 'the deployed';
    this.adminService
      .search('description', this.search)
      .subscribe((res: any) => {
        console.log(res);
        this.product = res.collection.items;
      });
    // item.data[0].nasa_id  ====> this.product
  }
}
