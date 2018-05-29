export class RoomExtraObject {

  private _flag: string;

  get flag(): string {
    return this._flag;
  }

  set flag(value: string) {
    this._flag = value;
  }

  private _keyword: string;

  get keyword(): string {
    return this._keyword;
  }

  set keyword(value: string) {
    this._keyword = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
