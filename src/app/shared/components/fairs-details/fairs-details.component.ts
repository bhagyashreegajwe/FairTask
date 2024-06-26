import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fair.interface';
import { fairsArr } from '../../const/fairData';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {

  @Input() getSelectedCard!: Ifairs;
  constructor() { }

  ngOnInit(): void {
  }

}
