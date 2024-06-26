import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../models/fair.interface';

@Component({
  selector: 'app-fairs-cards',
  templateUrl: './fairs-cards.component.html',
  styleUrls: ['./fairs-cards.component.scss']
})
export class FairsCardsComponent implements OnInit {

  @Input() getFairCard!: Ifairs;
  @Output() getCardDetailsId: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onFairClick(){
    this.getCardDetailsId.emit(this.getFairCard.fairId)
  }

}
