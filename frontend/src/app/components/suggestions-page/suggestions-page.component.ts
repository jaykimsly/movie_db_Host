import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss']
})
export class SuggestionsPageComponent implements OnInit {

  Movies!: any[];
  constructor(private card_service: CardService) { }

  ngOnInit(): void {
    this.card_service.getSug().subscribe(( respond:any )=>{
      console.log(respond.results)

      this.Movies = respond.results;
    })
  }
  getMovieInfo(index:any){
    localStorage.setItem("movie", JSON.stringify(this.Movies[index]))
  }

}
