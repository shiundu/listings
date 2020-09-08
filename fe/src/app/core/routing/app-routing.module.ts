import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component'
import { ListingsComponent } from '../../listings/listings.component'
import { ItemComponent } from '../../listings/item/item.component'
import { AddItemComponent } from '../../listings/add-item/add-item.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: AppComponent },
  { path: 'listings/new', component: AddItemComponent },
  { path: 'listings/:id', component: ItemComponent },
  { path: 'listings', component: ListingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
