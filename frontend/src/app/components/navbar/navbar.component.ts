import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
