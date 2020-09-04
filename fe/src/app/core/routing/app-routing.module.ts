import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component'
import { ListingsComponent } from '../../listings/listings.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: AppComponent },
  { path: 'listings', component: ListingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
