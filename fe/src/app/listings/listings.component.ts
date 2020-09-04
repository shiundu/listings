import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  items = [];
  items$:Observable<any>;

  constructor(private apiService: ApiService) { }

  public getAllProducts () {
    this.items$ = this.apiService.sendGetRequest('items');
  }

	ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy(){
  }

}
