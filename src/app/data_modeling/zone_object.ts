import {ZoneCommands} from './zone_commands';

export class ZoneObject {
  vnum: number;
  zoneName: string;
  topRoomNumber: number;
  lifeSpan: number;
  resetMode: number;
  zoneCommands: Array<ZoneCommands>;
}
