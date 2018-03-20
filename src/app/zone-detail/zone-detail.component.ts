import { Component, SimpleChanges, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { ZoneObject } from '../data-modeling/zones/zone-object';

import { ZoneObject } from '../data-modeling/zones-api/zone-object';
import { ZoneCommandObject } from '../data-modeling/zones-api/zone-command-object';



@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit {

  public showList = true;
  public newZone = false;
  public newCmd = false;

  zoneObject: ZoneObject;
  commandObject: ZoneCommandObject;

  @Input() zone: ZoneObject;

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

  onSelectCommand(zoneCommandObject: ZoneCommandObject): void {
    this.commandObject = zoneCommandObject;
    this.showList = false;
  }

  ngOnChanges(simpleChanges: SimpleChanges[]) {

    if (simpleChanges['zone']) {
      this.showList = true;
      this.zoneObject = null;
    }
  }

  ngOnInit() { }

}
