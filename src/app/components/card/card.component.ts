import { Component, Input, OnInit } from '@angular/core';
import { IFish, ISea, IBug, IFossil, IType, IObject } from 'src/app/common/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() dataType: IObject['dataType'];
  @Input() data: IObject['data'];
  constructor() {
    //
  }

  ngOnInit() {
    console.log(this.data); 
    console.log(this.dataType); 
  }


}
