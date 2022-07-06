import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  Movies!: any[];
  constructor(private card_service: CardService) { }

  ngOnInit(): void {
    this.card_service.getKids().subscribe(( respond:any )=>{
        console.log(respond.results)

        this.Movies = respond.results;
    })
  }


  getMovieInfo(index:any){
    localStorage.setItem("movie",JSON.stringify(this.Movies[index])) 
  }
  }


