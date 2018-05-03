export class ZoneObject {

  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(vnum: number) {
    this._vnum = vnum;
  }

  private _zoneName: string;

  get zoneName(): string {
    return this._zoneName;
  }

  set zoneName(zoneName: string) {
    this._zoneName = zoneName;
  }

  private _topRoomNumber: number;

  get topRoomNumber(): number {
    return this.topRoomNumber;
  }

  set topRoomNumber(topRoomNumber: number) {
    this._topRoomNumber = topRoomNumber;
  }

  private _lifeSpan: number;

  get lifeSpan(): number {
    return this._lifeSpan;
  }

  set lifeSpan(lifeSpan: number) {
    this._lifeSpan = lifeSpan;
  }

  private _resetMode: number;

  get resetMode(): number {
    return this._resetMode;
  }

  set resetMode(resetMode: number) {
    this._resetMode = resetMode;
  }
}
