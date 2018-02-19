import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

import {ZoneObject} from './data_modeling/zone_object';
import {ZoneCommands} from './data_modeling/zone_commands';
import {ZONEOBJECT} from './data_modeling/zonemock';
import {ZONECOMMANDS30} from './data_modeling/zone_commmands_mock';
import {ZONECOMMANDS31} from './data_modeling/zone_commmands_mock';

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

  getCommands(vnum: number): Observable<ZoneCommands[]> {
    /**
     * Forzaura per il mock: leggo il vnum e torno a forza i due elementi.
     * Nella versione finale dovrà fare una chiamata al ws su base vnum ed avere i dati corretti.
     */
    if (30 === vnum) {
      return of(ZONECOMMANDS30);
    } else {
      return of(ZONECOMMANDS31);
    }
  }

}
