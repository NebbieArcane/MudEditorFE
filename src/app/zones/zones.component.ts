import {Component, OnInit} from '@angular/core';

import {ZoneService} from '../zone.service';
import {ZoneObject} from '../data_modeling/zone_object';
import {ZONEOBJECT} from '../data_modeling/zonemock';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zoneobject: ZoneObject[];

  selectedZones: ZoneObject;

  onSelect(zoneObject: ZoneObject): void {
    this.selectedZones = zoneObject;
  }

  constructor(private zoneService: ZoneService) {}

  ngOnInit() {
    this.getZones();
  }

  getZones(): void {
    this.zoneService.getZones().subscribe(zoneobject => this.zoneobject = zoneobject);
  }

}
