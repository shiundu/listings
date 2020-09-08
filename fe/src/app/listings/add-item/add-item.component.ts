import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemForm: FormGroup;
  // name = new FormControl('', [Validators.required, Validators.minLength(10)]);
  // description = new FormControl('', [Validators.required, Validators.minLength(10)]);
  // imageUrl: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.itemForm = this.fb.group({
      name: [null, [Validators.required,  Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      imageUrl: [null]
    });
  }

  getErrorMessage(field) {
    if (this.itemForm.controls[field].errors.required) {
      return 'Enter a ' + field;
    }
    return null;
  }

  ngOnInit(): void {
  }
}
