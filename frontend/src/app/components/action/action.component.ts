import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  Movies!: any[];
  constructor(private card_service: CardService) { }

  ngOnInit(): void {
    this.card_service.getAction().subscribe(( respond:any )=>{
        console.log(respond.results)

        this.Movies = respond.results;
    })
  }


  getMovieInfo(index:any){
    localStorage.setItem("movie",JSON.stringify(this.Movies[index])) 
  }

}
