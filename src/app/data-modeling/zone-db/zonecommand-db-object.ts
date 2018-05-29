export class ZonecommandDbObject {
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _zoneCmd: string;

  get zoneCmd(): string {
    return this._zoneCmd;
  }

  set zoneCmd(value: string) {
    this._zoneCmd = value;
  }

  private _zoneId: number;

  get zoneId(): number {
    return this._zoneId;
  }

  set zoneId(value: number) {
    this._zoneId = value;
  }

  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(value: number) {
    this._vnum = value;
  }

  private _cap: number;

  get cap(): number {
    return this._cap;
  }

  set cap(value: number) {
    this._cap = value;
  }

  private _room: number;

  get room(): number {
    return this._room;
  }

  set room(value: number) {
    this._room = value;
  }

  private _slot: number;

  get slot(): number {
    return this._slot;
  }

  set slot(value: number) {
    this._slot = value;
  }

  private _slotDesc: string;

  get slotDesc(): string {
    return this._slotDesc;
  }

  set slotDesc(value: string) {
    this._slotDesc = value;
  }

  private _intoObj: number;

  get intoObj(): number {
    return this._intoObj;
  }

  set intoObj(value: number) {
    this._intoObj = value;
  }

  private _exits: string;

  get exits(): string {
    return this._exits;
  }

  set exits(value: string) {
    this._exits = value;
  }

  private _state: string;

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
