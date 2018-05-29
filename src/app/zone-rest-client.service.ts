import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {environment} from '../environments/environment';


import {MessageService} from './message.service';
import {ZonesObject} from './data-modeling/zones-api/zones-object';
import {ZoneObject} from './data-modeling/zones-api/zone-object';
import {RoomObject} from "./data-modeling/rooms-api/roomobject";
import {tap} from "rxjs/operators";
import {MobObject} from "./data-modeling/mobs-api/mob-object";
import {ObjObject} from "./data-modeling/objs-api/obj-object";
import {SpecObject} from "./data-modeling/specs-api/spec-object";
import {ShopObject} from "./data-modeling/shops-api/shop-object";

@Injectable()
export class ZoneRestClientService {

  private zonesUrl = environment.zoneRestApi;
  private roomsUrl = environment.roomRestApi;
  private mobsUrl = environment.mobRestApi;
  private objsUrl = environment.objRestApi;
  private specsUrl = environment.specRestApi;
  private shopsUrl = environment.shopRestApi;
  private secret = environment.auth;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getZones(): Observable<ZonesObject[]> {
    let finalUrl = this.zonesUrl + '?' + this.secret;
    this.messageService.add('Zone service: fetched zones');
    return this.http.get<ZonesObject[]>(finalUrl);
  }

  getZone(path: string): Observable<ZoneObject> {
    let finalUrl = this.zonesUrl + '/' + path + '?' + this.secret;
    console.log(finalUrl);

    return this.http.get<ZoneObject>(finalUrl).pipe(
      tap(_ => this.messageService.add('ZONE'))
    );
  }

  getRooms(path: string): Observable<RoomObject[]> {
    let finalUrl = this.roomsUrl + '/' + path;
    console.log(finalUrl);
    return this.http.get<RoomObject[]>(finalUrl).pipe(
      tap(_ => this.messageService.add('ROOMS'))
    );
  }

  getFullZone(path: string) {
    let zonesUrl = this.zonesUrl + '/' + path;
    let roomsUrl = this.roomsUrl + '/' + path;
    let mobsUrl = this.mobsUrl + '/' + path;
    let objsUrl = this.objsUrl + '/' + path;
    let specsUrl = this.specsUrl + '/' + path;
    let shopsUrl = this.shopsUrl + '/' + path;
    return Observable.forkJoin(
      this.http.get<ZoneObject>(zonesUrl),
      this.http.get<RoomObject[]>(roomsUrl),
      this.http.get<MobObject[]>(mobsUrl),
      this.http.get<ObjObject[]>(objsUrl),
      this.http.get<SpecObject[]>(specsUrl),
      this.http.get<ShopObject[]>(shopsUrl)
    );
  }

}
