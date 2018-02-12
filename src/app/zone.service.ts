import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

import {ZoneObject} from './data_modeling/zone_object';
// import {ZoneCommands} from './data_modeling/zone_commands';
import {ZONEOBJECT} from './data_modeling/zonemock';

@Injectable()
export class ZoneService {

  constructor(private messageService: MessageService) {}

  getZones(): Observable<ZoneObject[]> {
    this.messageService.add('Zone service: fetched zone');
    return of(ZONEOBJECT);
  }

  getZone(vnum: number): Observable<ZoneObject> {
    this.messageService.add('Zone service: fetched zone');
    return of(ZONEOBJECT.find(zoneObject => zoneObject.vnum === vnum));
  }

}
