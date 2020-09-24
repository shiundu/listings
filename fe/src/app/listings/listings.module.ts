import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './list/listings.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { ItemComponent } from './list/item/item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ListingsComponent, ItemComponent, EditItemComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ListingsRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ]
})
export class ListingsModule { }
