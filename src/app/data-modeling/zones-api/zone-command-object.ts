export class ZoneCommandObject {

	private _ifFlag: boolean;
	private _vnum: number;
	private _cap: number;
	private _room: number;
	private _reserved: number;
	private _slot: number;
	private _slotDesc: string;
	private _into: number;
	private _exit: string;
	private _state: string;

	constructor() { }


	set ifFlag(ifFlag: boolean) {
		this._ifFlag = ifFlag;
	}

	get ifFlag(): boolean {
		return this._ifFlag;
	}

	set vnum(vnum: number) {
		this._vnum = vnum;
	}
	
	get vnum(): number {
		return this._vnum;
	}

	set cap(cap: number) {
		this._cap = cap;
	}

	get cap(): number {
		return this._cap;
	}

	set room(room: number) {
		this._room = room;
	}

	get room(): number {
		return this._room;
	}
	
	set reserved(reserved: number) {
		this._reserved = reserved;
	}

	get reserved(): number {
		return this._reserved;
	}

	set slot(slot: number) {
		this._slot = slot;
	}

	get slot(): number {
		return this._slot;
	}

	set into(into: number) {
		this._into = into;
	}

	get into(): number {
		return this._into;
	}

	set exit(exit: string) {
		this._exit = exit;
	}

	get exit(): string {
		return this.exit;
	}

	set state(state: string) {
		this._state = state;
	}

	get state(): string {
		return this._state;
	}
	
}