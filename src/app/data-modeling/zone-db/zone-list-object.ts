export class ZoneListObject {

	private _id: number;
	private _start: number;
	private _end: number;
	private _path: string;
	private _name: string;
	private _status: string;

	constructor() { }

	get id(): number {
	  return this._id;
  }

	set start(start: number) {
		this._start = start;
	}

	get start(): number {
		return this._start;
	}

	set end(end: number) {
		this._end = end;
	}

	get end(): number {
		return this._end;
	}

	set path(path: string) {
		this._path = path;
	}

	get path(): string {
		return this._path;
	}

	set name(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set status(status: string) {
		this._status = status;
	}

	get status(): string {
		return this._status;
	}
}
