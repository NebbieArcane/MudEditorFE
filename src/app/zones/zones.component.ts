import {Component, OnInit} from '@angular/core';
import {ZoneRestClientService} from '../zone-rest-client.service';
import {DbZoneRestServiceService} from '../db-zone-rest-service.service';


import {ZonesObject} from '../data-modeling/zones-api/zones-object';
import {ZoneObject} from '../data-modeling/zones-api/zone-object';
import {ZoneListObject} from "../data-modeling/zone-db/zone-list-object";

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zoneobject: ZonesObject[];
  dbzoneobject: ZonesObject[];

  zone: ZoneObject;
  zoneDb: ZoneListObject;

  path: string;

  onSelect(zoneObject: ZonesObject): void {
    this.path = zoneObject.path;
    this.getZone(this.path);
  }



  constructor(private zoneService: ZoneRestClientService,
              private dbZoneService: DbZoneRestServiceService) {
  }

  ngOnInit() {
    this.getZones();
    this.getDbZones();
  }

  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
  }

  getZone(path: string): void {
    this.zoneService.getZone(path).subscribe(zone => this.zone = zone);
  }

  getDbZones(): void {
    this.dbZoneService.getZones().subscribe(dbzonesobject => this.dbzoneobject = dbzonesobject);
  }

}
