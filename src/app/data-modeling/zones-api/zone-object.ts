import {ZoneCommandObject} from './zone-command-object';


export class ZoneObject {

  constructor() {
  }

  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(vnum: number) {
    this._vnum = vnum;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  private _end: number;

  get end(): number {
    return this._end;
  }

  set end(end: number) {
    this._end = end;
  }

  private _lifespan: number;

  get lifespan(): number {
    return this._lifespan;
  }

  set lifespan(lifespan: number) {
    this._lifespan = lifespan;
  }

  private _resetmode: string;

  get resetmode(): string {
    return this._resetmode;
  }

  set resetmode(resetmode: string) {
    this._resetmode = resetmode;
  }

  private _actions: ZoneCommandObject[];

  get actions(): ZoneCommandObject[] {
    return this._actions;
  }

  set actions(actions: ZoneCommandObject[]) {
    this._actions = actions;
  }

  private _path: string;

  get path(): string {
    return this._path;
  }

  set path(path: string) {
    this._path = path;
  }
}
