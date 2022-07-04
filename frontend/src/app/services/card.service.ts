import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527";
  constructor(private http: HttpClient) { }
  popURL = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  sugURL = " https://discover/movie?&primary_release_year=2022";

  getCards(){
    return this.http.get(this.baseUrl);
  }
  getPop(){
    return this.http.get(this.popURL);
  }
  getSug(){
    return this.http.get(this.sugURL);
  }
}
