import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-view',
  templateUrl: './on-view.component.html',
  styleUrls: ['./on-view.component.scss']
})
export class OnViewComponent implements OnInit {
  

  movie!:any;
  constructor() {

    let movie:any;
    movie = localStorage.getItem("movie");

    this.movie = JSON.parse(movie)
   }

  ngOnInit(): void {


  }

}
