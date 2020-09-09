import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: AppComponent },
  {path: 'listings',
    loadChildren: () => import('../../listings/listings.module').then(m => m.ListingsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
