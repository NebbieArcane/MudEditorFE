export class ZoneCommand {
  constructor(
    public cmdId: number,
    public zoneVNum: number,
    public command: string,
    public ifFlag: number,
    public relatedVnum: number,
    public maxExisting: number,
    public roomVnum: number,
    public objVnum2: number,
    public equipmentPosition: number,
    public exitNum: number,
    public state: number
  ) { }
}

export class ZoneCommands {
  constructor(
    public zoneVNum: number,
    public commands: Array<ZoneCommand[]>,
  ) { }
}
