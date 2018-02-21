import {Component, OnInit} from '@angular/core';

import {ZoneService} from '../zone.service';
import {ZoneRestClientService} from '../zone-rest-client.service';
/*
import {ZoneObject} from '../data-modeling/zones/zone-object';
import {ZONEOBJECT} from '../data-modeling/zones/zonemock';
*/
import {ZoneApiObject} from '../data-modeling/zones/zone-api-object';



@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  //zoneobject: ZoneObject[];

  zoneobject: ZoneApiObject[];

  /*
  selectedZones: ZoneObject;

  onSelect(zoneObject: ZoneObject): void {
    this.selectedZones = zoneObject;
  }
  */

  constructor(private zoneService: ZoneRestClientService) {}

  ngOnInit() {
    this.getZones();
  }

  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
  }

}
