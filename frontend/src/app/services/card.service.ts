import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  
  
  baseUrl = "http://localhost:3000/movies";
  //APIbaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&&primary_release_year=2022";
  popUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527";
  sugUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  dUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  cUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  aUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  fUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  kUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576&&primary_release_year=2021";
  
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
  getAction(){
    return this.http.get(this.aUrl);
  }

  getComedy(){
    return this.http.get(this.cUrl);
  }

  getDrama(){
    return this.http.get(this.dUrl);
  }

  getFamily(){
    return this.http.get(this.fUrl);
  }

  getKids(){
    return this.http.get(this.kUrl);
  }
}
