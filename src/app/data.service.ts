import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { 
    console.log("Sevice is working")
  }
  getData(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
