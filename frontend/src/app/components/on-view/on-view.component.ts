import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-view',
  templateUrl: './on-view.component.html',
  styleUrls: ['./on-view.component.scss']
})
export class OnViewComponent implements OnInit {
  

  /*movie = {
    "adult": false,
    "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
    "genre_ids": [ 14,28,12],
    "id": 453395,
    "original_language": "en",
    "original_title": "Doctor Strange in the Multiverse of Madness",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "popularity": 11126.834,
    "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "release_date": "2022-05-04",
    "title": "Doctor Strange in the Multiverse of Madness",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 3659,
    "genre":"Action",
    "Director": "Anthony Russo",
    "Country" : "United States",
    "cast": "Robert Downey Jr. · Chris Evans · Mark Ruffalo · Chris Hemsworth · Scarlett Johansson · Jeremy Renner ·Don Cheadle · Paul Rudd."
}*/

movie!:any;
constructor() {

  let movie:any;
  movie = localStorage.getItem("movie");

  this.movie = JSON.parse(movie)
 }

  ngOnInit(): void {
  }

}
