import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ZoneRestClientService} from '../zone-rest-client.service';
import {DbZoneRestServiceService} from '../db-zone-rest-service.service';


import {ZonesObject} from '../data-modeling/zones-api/zones-object';
import {ZoneObject} from '../data-modeling/zones-api/zone-object';
import {ZoneListObject} from "../data-modeling/zone-db/zone-list-object";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit, OnChanges {

  zoneobject: ZonesObject[];
  tmpZoneobject: ZonesObject[];
  dbzoneobject: ZoneListObject[];
  dbZoneFormObject: ZoneListObject;
  zone: ZoneObject;
  tmpZone: ZoneObject;
  zoneDb: ZoneListObject;
  path: string;
  msg: string;
  p: string;

  constructor(private zoneService: ZoneRestClientService,
              private dbZoneService: DbZoneRestServiceService,
              private message: MessageService
  ) {

  }

  _newZone = false;

  set newZone(newZone: boolean) {
    this._newZone = newZone;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    this.zones();
  }

  onSelect(zoneObject: ZonesObject): void {
    this.path = zoneObject.path;
    this.getZone(this.path);
  }

  onSelectDb(dbZoneFormObject: ZoneListObject): void {
    this.getDbZone(dbZoneFormObject._id);
  }

  addDbZone(): void {
    this._newZone = true;
  }

  zones() {
    this.zoneService.getZones().subscribe(
      zoneobject => this.dbZone(zoneobject)
    );
  }

  dbZone(zones: ZonesObject[]) {
    this.dbZoneService.getListZones().subscribe(
      dbzoneobject => this.clean(zones, dbzoneobject)
    );
  }

  clean(zones: ZonesObject[], dbZones: ZoneListObject[]) {
    this.zoneobject = [];
    let found = false;
    for (let i = 0; i < zones.length; i++) {
      for (let k = 0; k < dbZones.length; k++) {
        if (zones[i].path.localeCompare(dbZones[k].path) === 0) {
          found = true;
        }
      }
      if (!found) {
        this.zoneobject.push(zones[i]);
      } else {
        found = false;
      }
    }
    this.dbzoneobject = dbZones;
  }

  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
    this.message.clear();
  }

  getZone(path: string): void {
    this.zoneService.getZone(path).subscribe(zone => this.addPath(zone, path));
    this.message.clear()
  }

  getDbZones(): void {
    this.dbZoneService.getListZones().subscribe(dbzoneobject => this.dbzoneobject = dbzoneobject);
    this.message.clear();
  }

  getDbZone(id: number): void {
    this.dbZoneService.getListZone(id).subscribe(zoneDb => this.zoneDb = zoneDb);
    this.message.clear()
  }

  addPath(zz: ZoneObject, path: string) {
    this.tmpZone = zz;
    this.tmpZone.path = this.path;
    this.zone = this.tmpZone;
  }


}
