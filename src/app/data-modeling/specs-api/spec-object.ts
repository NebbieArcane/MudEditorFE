export class SpecObject {
  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(value: number) {
    this._vnum = value;
  }

  private _function: string;

  get function (): string {
    return this._function;
  }

  set function (value: string) {
    this._function = value;
  }

  private _extra: string;

  get extra(): string {
    return this._extra;
  }

  set extra(value: string) {
    this._extra = value;
  }
}
