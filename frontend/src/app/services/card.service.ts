import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527";
  popUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  sugUrl = " https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&&primary_release_year=2020";
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
