import { Component, SimpleChanges, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ZoneObject } from '../data-modeling/zones/zone-object';


@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit {

  public showList = true;
  public newZone = false;

  zoneObject: ZoneObject;

  @Input() zoneobject: ZoneObject;

  constructor(private route: ActivatedRoute) {
    let action = route.snapshot.paramMap.get('id')
    if (action !== null && action === 'new') {
      this.newZone = true;
    }
  }

  onSelect(zoneObject: ZoneObject): void {
    this.zoneObject = zoneObject;
    this.showList = false;
  }

  ngOnChanges(simpleChanges: SimpleChanges[]) {

    if (simpleChanges['zoneobject']) {
      this.showList = true;
      this.zoneObject = null;
    }
  }

  ngOnInit() {
    console.log('**********************************************');
    console.log(JSON.stringify(this.zoneobject));
    console.log('**********************************************');
  }

}
