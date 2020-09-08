import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import Item from 'src/app/core/service/item/item';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/core/service/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;
  // items$:Observable<any>;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  public getItemDetails () {
    this.itemService.getItems(this.route.snapshot.params.id).subscribe((ob: Item) => {
      console.log('this.ob', ob);
      this.item = ob
    });
    console.log('item', this.item);
  }

  ngOnInit(): void {
    this.getItemDetails();
  }

}
