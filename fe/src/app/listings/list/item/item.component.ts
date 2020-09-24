import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../../service/item';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;
  // items$:Observable<any>;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  public getItemDetails () {
    this.itemService.getItems(this.route.snapshot.params.id).subscribe((ob: Item) => {
      console.log('this.ob', ob);
      this.item = ob
    });

    console.log('item', this.item);
  }

  onDelete(id: number) {
    this.itemService.deleteItem(id);
    this.router.navigate(['/listings']);
  }

  backToListings() {
    this.router.navigate(['/listings']);
  }

  onEdit(id: number) {
    this.router.navigate([`/listings/edit/${id}`]);
  }

  ngOnInit(): void {
    this.getItemDetails();
  }

}
