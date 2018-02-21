import {ZoneCommand} from './zone-commands';
import {ZoneCommands} from './zone-commands';

export const ZONECOMMAND1: ZoneCommand[] = [{
  cmdId: 1,
  zoneVNum: 30,
  command: 'M',
  ifFlag: 0,
  relatedVnum: 3010,
  maxExisting: 1,
  roomVnum: 3062,
  objVnum2: 0,
  equipmentPosition: 0,
  exitNum: 0,
  state: 0
}];

export const ZONECOMMAND2: ZoneCommand[] = [{
  cmdId: 2,
  zoneVNum: 30,
  command: 'R',
  ifFlag: 0,
  relatedVnum: 4010,
  maxExisting: 1,
  roomVnum: 3080,
  objVnum2: 0,
  equipmentPosition: 0,
  exitNum: 0,
  state: 0
}];

export const ZONECOMMAND3: ZoneCommand[] = [
  {
    cmdId: 3,
    zoneVNum: 31,
    command: 'R',
    ifFlag: 0,
    relatedVnum: 4010,
    maxExisting: 1,
    roomVnum: 3080,
    objVnum2: 0,
    equipmentPosition: 0,
    exitNum: 0,
    state: 0
  }
];

export const ZONECOMMANDS30: Array<ZoneCommands> = [{
  zoneVNum: 30,
  commands: [ZONECOMMAND1, ZONECOMMAND2]
}];

export const ZONECOMMANDS31: Array<ZoneCommands> = [{
  zoneVNum: 30,
  commands: [ZONECOMMAND3]
}];
