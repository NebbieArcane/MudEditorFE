// {"start":0,"end":10,"path":"scratch_zone_for_static","name":"Scratch Zone For Static Game\n"}
export class ZoneApiObject {

	private start: number;
	private end: number;
	private path: string;
	private name: string;

	constructor() { }

	public setStart(start: number) {
		this.start = start;
	}

	public getStart(): number {
		return this.start;
	}

	public setEnd(end: number) {
		this.end = end;
	}

	public getEnd(): number {
		return this.end;
	}

	public setPath(path: string) {
		this.path = path;
	}

	public getPath(): string {
		return this.path;
	}

	public setName(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}
