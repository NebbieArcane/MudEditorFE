import { ZoneCommandObject } from './zone-command-object';


export class ZoneObject {

	private _vnum: number;
	private _name: string;
	private _end: number;
	private _lifespan: number;
	private _resetmode: string;
	private _actions: ZoneCommandObject[];

	constructor() { }

	set vnum(vnum: number) {
		this._vnum = vnum;
	}

	get vnum(): number {
		return this._vnum;
	}

	set name(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set end(end: number) {
		this._end = end;
	}

	get end(): number {
		return this._end;
	}

	set lifespan(lifespan: number) {
		this._lifespan = lifespan;
	}

	get lifespan(): number {
		return this._lifespan;
	}

	set resetmode(resetmode: string) {
		this._resetmode = resetmode;
	}

	get resetmode(): string {
		return this._resetmode;
	}

	set actions(actions: ZoneCommandObject[]) {
		this._actions = actions;
	}

	get actions(): ZoneCommandObject[] {
		return this._actions;
	}

}