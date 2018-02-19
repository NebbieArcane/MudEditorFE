import { Component, SimpleChanges, OnInit, Input } from '@angular/core';

import { ZoneObject } from '../data_modeling/zone_object';


@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit {

  public showList = true;

  zoneObject: ZoneObject;

  @Input() zoneobject: ZoneObject;

  constructor() {
    
  }

  // createForm(): void {
    
  //   // remove list element

  //   this.showForm = true;

  //   if (this.zoneobject !== undefined) {

  //   }


  // }

  onSelect(zoneObject: ZoneObject): void {
    this.zoneObject = zoneObject;
    this.showList = false;
  }

  ngOnChanges(simpleChanges: SimpleChanges[]) {

    if(simpleChanges['zoneobject']) {
      this.showList=true;
      this.zoneObject=null;
    }
  }

  ngOnInit() {

  }

}
