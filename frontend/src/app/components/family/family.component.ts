import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  Movies!: any[];
  constructor(private card_service: CardService) { }

  ngOnInit(): void {
    this.card_service.getFamily().subscribe(( respond:any )=>{
        console.log(respond.results)

        this.Movies = respond.results;
    })
  }


  getMovieInfo(index:any){
    localStorage.setItem("movie",JSON.stringify(this.Movies[index])) 
  }

}
