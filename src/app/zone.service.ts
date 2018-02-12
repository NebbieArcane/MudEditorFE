import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {ZoneObject} from './data_modeling/zone_object';
import {ZoneCommands} from './data_modeling/zone_commands';
import {ZONEOBJECT} from './data_modeling/zonemock';

@Injectable()
export class ZoneService {

  constructor() {}

  getZone(): Observable<ZoneObject[]> {
    return of(ZONEOBJECT);
  }

}
