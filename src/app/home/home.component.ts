import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { environment } from 'src/environments/environment';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product: any = [];
  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.searchFunc();
  }
  // searchForm = this.fb.group({
  //   q: [''],
  //   center: [''],
  //   description: [''],
  //   keywords: [''],
  //   nasa_id: [''],
  //   photographer: [''],
  //   title: [''],
  // });
  searchForm = new FormGroup({
    q: new FormControl(''),
    center: new FormControl(''),
    description: new FormControl(''),
    keywords: new FormControl(''),
    nasa_id: new FormControl(''),
    photographer: new FormControl(''),
    title: new FormControl(''),
  });
  get q() {
    return this.searchForm.get('q');
  }
  get center() {
    return this.searchForm.get('center');
  }
  get description() {
    return this.searchForm.get('description');
  }
  get keywords() {
    return this.searchForm.get('keywords');
  }
  get nasa_id() {
    return this.searchForm.get('nasa_id');
  }
  get photographer() {
    return this.searchForm.get('photographer');
  }
  get title() {
    return this.searchForm.get('title');
  }
  // list = [
  //   'q',
  //   'center',
  //   'description',
  //   'keywords',
  //   'nasa_id',
  //   'photographer',
  //   'title',
  // ];

  searchText: string = '';
  textMuc = 'description';
  removeAcc(arr: string) {
    return arr
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  // a() {
  //   // this.textMuc ="q=apollo%2011&description=moon%20landing"
  //   // let text ='';
  //   // if(description){
  //   //   text += `description=${this.searchText}`
  //   // }
  //   // if(q){

  //   //   text += `q=${this.searchText}`
  //   // }

  //   this.adminService.search2(text).subscribe((res) => {});
  // }
  // searchFunc() {
  //   console.log(this.textMuc);
  //   // this.search = 'the deployed';
  //   this.adminService
  //     .search(this.textMuc, this.searchText)
  //     .subscribe((res: any) => {
  //       console.log(res);

  //       this.product = res.collection.items;
  //     });
  //   // item.data[0].nasa_id  ====> this.product
  // }
  searchArr: any[] = [];
  searchSub() {
    let text = '';
    let textList = [];
    if (this.q?.value) {
      // text += `q=${this.q?.value}`;
      textList.push(`q=${this.q?.value}`);
    }
    if (this.center?.value) {
      // text += `center=${this.center?.value}`;
      textList.push(`center=${this.center?.value}`);
    }
    if (this.description?.value) {
      // text += `description=${this.description?.value}`;
      textList.push(`description=${this.description?.value}`);
    }
    if (this.keywords?.value) {
      // text += `keywords=${this.keywords?.value}`;
      textList.push(`keywords=${this.keywords?.value}`);
    }
    if (this.nasa_id?.value) {
      // text += `nasa_id=${this.nasa_id?.value}`;
      textList.push(`nasa_id=${this.nasa_id?.value}`);
    }
    if (this.photographer?.value) {
      // text += `photographer=${this.photographer?.value}`;
      textList.push(`photographer=${this.photographer?.value}`);
    }
    if (this.title?.value) {
      // text += `title=${this.title?.value}`;
      textList.push(`title=${this.title?.value}`);
    }
    console.log(text);
    textList.forEach((item, index) => {
      text += item;
      if (index < textList.length - 1) {
        text += '&';
      }
    });
    console.log('text', text);
    this.adminService.search2(text).subscribe((res) => {
      console.log('res', res);
      this.product = res.collection.items;
    });
  }
  ChooseMuc(text: string = '') {
    this.textMuc = text;
  }
  saveLoc() {
    let allPro: { like: boolean; value: any }[] = [];
    this.product.map((item: any) => {
      item.islike = false;
      item.removed = false;
      allPro.push(item);
    });
    let a = JSON.stringify(allPro);
    localStorage.setItem('list', a);
    window.location.assign('/list');
  }
}
