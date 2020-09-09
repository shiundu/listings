import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private api: ApiService) { }

  addItem(item) {
    try {
      return this.api.post('items', item);
    } catch(err) {
      console.log('post err', err)
    }
  }

  deleteItem(id: number | string) {
    try {
      return this.api.delete(`items/${id}`);
    } catch(err) {
      console.log('delete err', err)
    }
  }

  editItem(body) {
    try {
      return this.api.edit(`items/${body.id}`, body);
    } catch(err) {
      console.log('delete err', err)
    }
  }

  getItems(id: string | null = null) {
    return this.api.sendGetRequest(id ? `items/${id}` : 'items');
  }
}
