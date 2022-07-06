import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&&primary_release_year=2021";
  popUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527";
  sugUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&&primary_release_year=2019";
  constructor(private http: HttpClient) { }
  

  getCards(){
    return this.http.get(this.baseUrl);
  }
  getPop(){
    return this.http.get(this.popUrl);
  }
  getSug(){
    return this.http.get(this.sugUrl);
  }
}
