import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get(){
		return this.httpClient.get(environment.SERVER_URL);
  }

  public setupTokens = () => {

  }

  public sendGetRequest(path: string){
    return this.httpClient['get'](environment.SERVER_URL + path);
  }

  public post(path: string, body){
    return this.httpClient.post(environment.SERVER_URL + path, body).subscribe(
    (obj) => {
      return obj;
    });
  }

  public delete(path: string){
    return this.httpClient.delete(environment.SERVER_URL + path).subscribe(
    (obj) => {
      return obj;
    });
  }

  public edit(path: string, body){
    return this.httpClient.put(environment.SERVER_URL + path, body).subscribe(
      (obj) => {
        return obj;
      });
  }
}
