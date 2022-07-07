import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 term:string | undefined;

  Movies!: any[];
  constructor(private card_service: CardService) { }

  ngOnInit(): void {
    this.card_service.getCards().subscribe(( respond:any )=>{

        console.log(respond)
        console.log("response")

        
        this.Movies = respond;
        console.log(this.Movies)


    })
  }


  getMovieInfo(index:any){
    localStorage.setItem("movie",JSON.stringify(this.Movies[index])) 
  }

}