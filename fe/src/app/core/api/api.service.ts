import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  public get(){
		return this.httpClient.get(this.SERVER_URL);
  }

  public sendGetRequest(path: string){
    return this.httpClient.get(this.SERVER_URL + path);
    // return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }
}
