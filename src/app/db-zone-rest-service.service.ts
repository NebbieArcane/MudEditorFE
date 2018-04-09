import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {environment} from '../environments/environment';

import {MessageService} from './message.service';
import {ZoneListObject} from "./data-modeling/zone-db/zone-list-object";


@Injectable()
export class DbZoneRestServiceService {

  private finalUrl: string = environment.zoneDbRestApi;

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getListZones(): Observable<ZoneListObject[]> {
    console.log(this.finalUrl);
    this.messageService.add('Zone service: fetched zone');
    return this.http.get<ZoneListObject[]>(this.finalUrl);
  }

  getListZone(id: number): Observable<ZoneListObject> {
    console.log(this.finalUrl);
    this.messageService.add('Zone service: fetched zone');
    return this.http.get<ZoneListObject>(this.finalUrl + '/' + id);
  }

  saveListZone(zoneList: ZoneListObject): Observable<ZoneListObject> {
    console.log(this.finalUrl)
    this.messageService.add('Zone service: Request to store new zone');
    return this.http.post<ZoneListObject>(this.finalUrl, zoneList);
  }


}
