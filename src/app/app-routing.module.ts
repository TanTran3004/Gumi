import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { LikedCollectionComponent } from './liked-collection/liked-collection.component';
import { ListComponent } from './list/list.component';
import { RestoreCollectionComponent } from './restore-collection/restore-collection.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'removed',
    component: RestoreCollectionComponent,
  },
  {
    path: 'liked',
    component: LikedCollectionComponent,
  },
  // {
  //   path: 'detail/:nasa_id',
  //   component: CollectionDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
