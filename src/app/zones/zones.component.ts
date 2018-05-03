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
  dbzoneobject: ZoneListObject[];
  dbZoneFormObject: ZoneListObject;
  zone: ZoneObject;
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

  //@Input() dbzoneobject: ZoneListObject;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dbzoneobject']) {
      console.log('eccheccazzo!!!!');
    }
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
    this.getDbZone(dbZoneFormObject._id);
  }


  addDbZone(): void {
    this._newZone = true;
  }


  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
    this.message.clear();
  }

  getZone(path: string): void {
    this.zoneService.getZone(path).subscribe(zone => this.zone = zone);
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

}
