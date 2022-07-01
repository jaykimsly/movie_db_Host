import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527";
  constructor(private http: HttpClient) { }


  getCards(){
    return this.http.get(this.baseUrl);
  }
}
