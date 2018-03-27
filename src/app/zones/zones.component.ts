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
  dbzoneobject: ZoneListObject[];

  dbZoneFormObject: ZoneListObject;

  zone: ZoneObject;
  zoneDb: ZoneListObject;

  path: string;

  newZone = false;

  constructor(private zoneService: ZoneRestClientService,
              private dbZoneService: DbZoneRestServiceService) {
  }

  ngOnInit() {
    this.getZones();
    this.getDbZones();
  }


  onSelect(zoneObject: ZonesObject): void {
    this.path = zoneObject.path;
    this.getZone(this.path);
  }

  onSelectDb(dbZoneFormObject: ZoneListObject): void {
    this.getDbZone(dbZoneFormObject.id);
  }


  addDbZone(): void {
    this.newZone = true;
  }


  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
  }

  getZone(path: string): void {
    this.zoneService.getZone(path).subscribe(zone => this.zone = zone);
  }

  getDbZones(): void {
    this.dbZoneService.getZones().subscribe(dbzoneobject => this.dbzoneobject = dbzoneobject);
  }

  getDbZone(id: number): void {
    this.dbZoneService.getZone(id).subscribe(zoneDb => this.zoneDb = this.zoneDb);
  }

}
