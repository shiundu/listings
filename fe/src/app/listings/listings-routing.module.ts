import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './list/item/item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListingsComponent } from './list/listings.component';


const routes: Routes = [
  { path: 'edit/:id', component: EditItemComponent },
  { path: 'new', component: EditItemComponent },
  { path: ':id', component: ItemComponent },
  { path: '', component: ListingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingsRoutingModule { }
