export class ZoneCommand {
  cmdId: number;
  zoneVNum: number;
  command: string;
  ifFlag: number;
  relatedVnum: number;
  maxExisting: number;
  roomVnum: number;
  objVnum2: number;
  equipmentPosition: number;
  exitNum: number;
  state: number;
}

export class ZoneCommands {
  zoneVNum: number;
  commands: Array<ZoneCommand[]>;
}
