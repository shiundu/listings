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

  public post(path: string, body){
    return this.httpClient.post(this.SERVER_URL + path, body).subscribe(
    (obj) => {
      return obj;
    });
    // return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  public delete(path: string){
    return this.httpClient.delete(this.SERVER_URL + path).subscribe(
    (obj) => {
      return obj;
    });
    // return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  public edit(path: string, body){
    return this.httpClient.put(this.SERVER_URL + path, body).subscribe(
      (obj) => {
        return obj;
      });
    // return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }
}
