import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {environment} from '../environments/environment';

import {MessageService} from './message.service';
import {ZoneListObject} from "./data-modeling/zone-db/zone-list-object";


@Injectable()
export class DbZoneRestServiceService {

  private zonesUrl: string = environment.zoneDbRestApi;
  private secret: string = environment.auth;

  private finalUrl: string = this.zonesUrl + '?' + this.secret;

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getZones(): Observable<ZoneListObject[]> {
    this.messageService.add('Zone service: fetched zone');
    return this.http.get<ZoneListObject[]>(this.finalUrl);
  }

  saveZone(zoneList: ZoneListObject): Observable<any> {
    let response = this.http.post(this.finalUrl, zoneList);
    console.log(JSON.stringify(response));
    return response;
  }

}
