import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private api: ApiService) { }

  addProduct(name, description, imageUrl) {
    const obj = {
      name,
      description,
      imageUrl
    };

    return this.api.post('item/add', obj);
  }

  getItems(id: string | null = null) {
    return this.api.sendGetRequest(id ? `items/${id}` : 'items');
  }
}
