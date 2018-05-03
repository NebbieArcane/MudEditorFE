import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {environment} from '../environments/environment';


import {MessageService} from './message.service';
import {ZonesObject} from './data-modeling/zones-api/zones-object';
import {ZoneObject} from './data-modeling/zones-api/zone-object';

@Injectable()
export class ZoneRestClientService {

  private zonesUrl = environment.zoneRestApi;
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
    this.messageService.add(path);
    return this.http.get<ZoneObject>(finalUrl);
  }

}
