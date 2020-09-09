import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ItemService } from '../../core/service/item/item.service';
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

  constructor(private itemService: ItemService, private router: Router) { }

  public getAllItems () {
    this.items$ = this.itemService.getItems();
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
