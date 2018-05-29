export class ZonesObject {

  constructor() {
  }

  private _start: number;

  get start(): number {
    return this._start;
  }

  set start(start: number) {
    this._start = start;
  }

  private _end: number;

  get end(): number {
    return this._end;
  }

  set end(end: number) {
    this._end = end;
  }

  private _path: string;

  get path(): string {
    return this._path;
  }

  set path(path: string) {
    this._path = path;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
