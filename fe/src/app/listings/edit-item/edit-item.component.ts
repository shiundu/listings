import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ItemService } from '../../core/service/item/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import Item from '../../core/service/item/item';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  itemForm: FormGroup;
  itemId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private itemService:  ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  createForm(obj: Item = null) {
    if(obj && this.itemId) {
      this.itemForm = this.fb.group({
        id: [obj.id, [Validators.required,  Validators.minLength(5)]],
        name: [obj.name, [Validators.required,  Validators.minLength(5)]],
        description: [obj.description, [Validators.required, Validators.minLength(10)]],
        imageUrl: [obj.imageUrl],
        status: [obj.status]
      });
      return this.itemForm;
    }
    this.itemForm = this.fb.group({
      name: [null, [Validators.required,  Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      imageUrl: [null],
      status: [false]
    });
  }

  getErrorMessage(field) {
    if (this.itemForm.controls[field].errors.required) {
      return 'Enter a ' + field;
    }
    return null;
  }

  public getItemDetails () {
    this.itemService.getItems(this.route.snapshot.params.id).subscribe((obj: Item) => {
      this.createForm(obj)
    });
  }

  onCancel() {
    this.router.navigate(['/listings']);
    // console.log('form', this.itemForm)
  }

  onSubmit() {
    if(this.itemId) {
      this.itemService.editItem({...this.itemForm.value});
      this.openSnackBar(`${this.itemForm.value['name']} updated`, '')
      return;
    }
    this.itemService.addItem({...this.itemForm.value});
  }

  ngOnInit(): void {
    if(this.route.snapshot.params.id) {
      this.itemId = this.route.snapshot.params.id;
      this.getItemDetails();
    }
    this.createForm()
  }
}
