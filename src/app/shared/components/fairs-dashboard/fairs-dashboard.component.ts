import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fair.interface';
import { fairsArr } from '../../const/fairData';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
  
  getFairCards:Array<Ifairs> = fairsArr

  constructor() { }

  selectedFair !:Ifairs

  ngOnInit(): void {
    this.selectedFair = this.getFairCards[0]
  }

  onCardClick(sFair:string){
    this.selectedFair = this.getFairCards.find(fair => fair.fairId === sFair)!
  }

}
