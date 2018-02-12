import {ZoneObject} from './zone_object';
import {ZoneCommands} from './zone_commands';

export const ZONECOMMAND: ZoneCommands[] = [{
  command: 'M',
  ifFlag: 0,
  relatedVnum: 3010,
  maxExisting: 1,
  roomVnum: 3062,
  objVnum1: 0,
  objVnum2: 0,
  equipmentPosition: 0,
  exitNum: 0,
  state: 0
}];

export const ZONECOMMAND2: ZoneCommands[] = [{
  command: 'R',
  ifFlag: 0,
  relatedVnum: 4010,
  maxExisting: 1,
  roomVnum: 3080,
  objVnum1: 0,
  objVnum2: 0,
  equipmentPosition: 0,
  exitNum: 0,
  state: 0
}];

export const ZONEOBJECT: ZoneObject[] = [
  {
    vnum: 30,
    zoneName: 'Northern Midgaard Main City~',
    topRoomNumber: 3099,
    lifeSpan: 15,
    resetMode: 2,
    zoneCommands: ZONECOMMAND
  }, {
    vnum: 31,
    zoneName: 'Southern Midgaard Main City~',
    topRoomNumber: 4099,
    lifeSpan: 15,
    resetMode: 2,
    zoneCommands: ZONECOMMAND2
  }
];
