import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ZoneObject} from '../data-modeling/zones-api/zone-object';
import {ZoneCommandObject} from '../data-modeling/zones-api/zone-command-object';
import {ZoneListObject} from "../data-modeling/zone-db/zone-list-object";
import {DbZoneRestServiceService} from "../db-zone-rest-service.service";
import {NewZoneListResponse} from "../data-modeling/zone-db/new-zone-list-response";

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit {

  public showList = true;
  public newZone = false;
  public newZoneListError = false;
  public count = 0;

  zoneListId = 0;

  zoneObject: ZoneObject;
  commandObject: ZoneCommandObject;
  newZoneList: ZoneListObject;
  zoneList: ZoneListObject;


  newZoneResponse: NewZoneListResponse;


  @Input() zone: ZoneObject;

  constructor(private route: ActivatedRoute, private dbZoneService: DbZoneRestServiceService) {
    let action = route.snapshot.paramMap.get('id')
    if (action !== null && action === 'new') {
      this.newZone = true;
    }
  }

  onSelect(): void {
    this.count++;
    console.log('count: ' + this.count);
    // controllare che non sia già scaricata (find by path?)


    // qui devo scaricare tutti i pezzi dal BE e creare le varie cose sul DB.
    // 1. Zona indice e avviamo la catena
    this.newZoneList = new ZoneListObject();
    this.newZoneList._userId = 0;
    this.newZoneList._name = this.zone.name;
    this.newZoneList._path = this.zone.path;
    this.newZoneList._start = 0;
    this.newZoneList._end = this.zone.end;
    this.newZoneList._status = 'EDIT';
    this.dbZoneService.saveListZone(this.newZoneList).subscribe(
      response => this.step1(response)
    );
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

  step1(response: NewZoneListResponse) {
    this.newZoneResponse = response;
    if (this.newZoneResponse.status === 'OK') {

    } else {
      // errore.. devo farlo vedere
      this.newZoneListError = true;

    }
    console.log(this.newZoneResponse);
  }

  ngOnInit() {
  }

}
