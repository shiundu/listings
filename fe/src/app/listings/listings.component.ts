import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../core/service/api/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsComponent implements OnInit {
  items = [];
  items$:Observable<any>;

  constructor(private apiService: ApiService, private router: Router) { }

  public getAllItems () {
    this.items$ = this.apiService.sendGetRequest('items');
  }

  onSelect(itemId: string) {
    this.router.navigate(['/listings/', itemId]);
  }

	ngOnInit() {
    this.getAllItems();
  }

  ngOnDestroy(){
  }

}
