import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ZoneObject} from '../data-modeling/zones-api/zone-object';
import {ZoneCommandObject} from '../data-modeling/zones-api/zone-command-object';
import {ZoneListObject} from "../data-modeling/zone-db/zone-list-object";
import {DbZoneRestServiceService} from "../db-zone-rest-service.service";
import {NewZoneListResponse} from "../data-modeling/zone-db/new-zone-list-response";
import {ZonesComponent} from "../zones/zones.component";
import {ZoneRestClientService} from "../zone-rest-client.service";
import {RoomObject} from "../data-modeling/rooms-api/roomobject";
import {MessageService} from "../message.service";
import {MobObject} from "../data-modeling/mobs-api/mob-object";
import {ObjObject} from "../data-modeling/objs-api/obj-object";
import {SpecObject} from "../data-modeling/specs-api/spec-object";
import {ShopObject} from "../data-modeling/shops-api/shop-object";

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit, OnChanges {

  public showList = true;
  public newZone = false;
  public newZoneListError = false;
  public count = 0;

  zoneListId = 0;

  /**
   * API objects
   */
  zoneObject: ZoneObject;
  roomsObject: RoomObject[];
  mobsObject: MobObject[];
  objsObject: ObjObject[];
  specsObject: SpecObject[];
  shopsObject: ShopObject[];


  commandObject: ZoneCommandObject;
  newZoneList: ZoneListObject;
  zoneList: ZoneListObject;


  newZoneResponse: NewZoneListResponse;

  info: object;

  @Input() zone: ZoneObject;

  constructor(
    private route: ActivatedRoute,
    private dbZoneService: DbZoneRestServiceService,
    private zoneRestService: ZoneRestClientService,
    private zonesComponent: ZonesComponent,
    private message: MessageService
  ) {
    let action = route.snapshot.paramMap.get('id')
    if (action !== null && action === 'new') {
      this.newZone = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
    for (let propName in changes) {
      let change = changes[propName];
      console.log('++++++++++++++++');
      console.log(propName);
      console.log('++++++++++++++++');
    }
    */
  }

  onSelect(): void {
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
      response => this.getPieces(response)
    );
  }

  onSelectCommand(zoneCommandObject: ZoneCommandObject): void {
    this.commandObject = zoneCommandObject;
    this.showList = false;
  }

  getPieces(response: NewZoneListResponse) {

    if (response.status === 'OK') {
      this.zonesComponent.zones();
      this.zoneRestService.getFullZone(response.zone.path).subscribe(
        data => {
          this.zoneObject = data[0]
          this.roomsObject = data[1]
          this.mobsObject = data[2]
          this.objsObject = data[3]
          this.specsObject = data[4]
          this.shopsObject = data[5]
          this.store()
        },
      )
    } else {
      this.newZoneListError = true;
    }
  }

  store() {


    console.log(this.zoneObject);
    console.log(this.roomsObject);
    console.log(this.mobsObject);
    console.log(this.objsObject);
    console.log(this.specsObject);
    console.log(this.shopsObject);
  }


  /*getPieces(response: NewZoneListResponse) {*/
  /*  this.newZoneResponse = response;*/
  /*  if (this.newZoneResponse.status === 'OK') {*/
  /*    // ho salvato la zona indice, posso prendere la zona vera e salvare pure quella. Nel mentre aggiorno la lista*/
  /*    this.zonesComponent.zones();*/
  /*    let path = response.zone.path;*/
  /**/
  /*    this.zoneRestService.getZone(path).subscribe(*/
  /*      response => this.zoneObject = response*/
  /*    )*/
  /**/
  /*    this.zoneRestService.getRooms(path).subscribe(*/
  /*      response => this.roomsObject = response*/
  /*    )*/
  /**/
  /*  } else {*/
  /*    // errore.. devo farlo vedere*/
  /*    this.newZoneListError = true;*/
  /*  }*/
  /*  console.log(this.newZoneResponse);*/

  /*}*/


  ngOnInit() {

  }

}
