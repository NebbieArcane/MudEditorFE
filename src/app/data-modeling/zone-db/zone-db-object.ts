export class ZoneDbObject {
  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(value: number) {
    this._vnum = value;
  }

  private _zoneId: number;

  get zoneId(): number {
    return this._zoneId;
  }

  set zoneId(value: number) {
    this._zoneId = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _lifeSpan: number;

  get lifeSpan(): number {
    return this._lifeSpan;
  }

  set lifeSpan(value: number) {
    this._lifeSpan = value;
  }

  private _resetMode: string;

  get resetMode(): string {
    return this._resetMode;
  }

  set resetMode(value: string) {
    this._resetMode = value;
  }
}
