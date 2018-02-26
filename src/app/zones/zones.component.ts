import {Component, OnInit} from '@angular/core';

import {ZoneService} from '../zone.service';
import {ZoneRestClientService} from '../zone-rest-client.service';
/*
import {ZoneObject} from '../data-modeling/zones/zone-object';
import {ZONEOBJECT} from '../data-modeling/zones/zonemock';
*/
import {ZonesObject} from '../data-modeling/zones-api/zones-object';
import {ZoneObject} from '../data-modeling/zones-api/zone-object';



@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zoneobject: ZonesObject[];

  zone: ZoneObject;

  path: string;

  onSelect(zoneObject: ZonesObject): void {
    this.path = zoneObject.path;
    this.getZone(this.path);
  }


  constructor(private zoneService: ZoneRestClientService) {}

  ngOnInit() {
    this.getZones();
  }

  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
  }

  getZone(path: string): void {
    this.zoneService.getZone(path).subscribe(zone => this.zone = zone);
  }

}
