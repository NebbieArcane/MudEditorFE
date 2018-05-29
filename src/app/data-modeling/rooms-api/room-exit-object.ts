export class RoomExitObject {
  private _direction: string;

  get direction(): string {
    return this._direction;
  }

  set direction(value: string) {
    this._direction = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _keywords: string[];

  get keywords(): string[] {
    return this._keywords;
  }

  set keywords(value: string[]) {
    this._keywords = value;
  }

  private _exitType: string;

  get exitType(): string {
    return this._exitType;
  }

  set exitType(value: string) {
    this._exitType = value;
  }

  private _keyVnum: number;

  get keyVnum(): number {
    return this._keyVnum;
  }

  set keyVnum(value: number) {
    this._keyVnum = value;
  }

  private _nextRoom: number;

  get nextRoom(): number {
    return this._nextRoom;
  }

  set nextRoom(value: number) {
    this._nextRoom = value;
  }
}
