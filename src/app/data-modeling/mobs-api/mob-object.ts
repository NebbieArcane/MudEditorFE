export class MobObject {
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _alias_list: string;

  get alias_list(): string {
    return this._alias_list;
  }

  set alias_list(value: string) {
    this._alias_list = value;
  }

  private _short_description: string;

  get short_description(): string {
    return this._short_description;
  }

  set short_description(value: string) {
    this._short_description = value;
  }

  private _long_description: string;

  get long_description(): string {
    return this._long_description;
  }

  set long_description(value: string) {
    this._long_description = value;
  }

  private _detailed_description: string;

  get detailed_description(): string {
    return this._detailed_description;
  }

  set detailed_description(value: string) {
    this._detailed_description = value;
  }

  private _action_bitvector: string[];

  get action_bitvector(): string[] {
    return this._action_bitvector;
  }

  set action_bitvector(value: string[]) {
    this._action_bitvector = value;
  }

  private _affected_bitvector: string[];

  get affected_bitvector(): string[] {
    return this._affected_bitvector;
  }

  set affected_bitvector(value: string[]) {
    this._affected_bitvector = value;
  }

  private _align: number;

  get align(): number {
    return this._align;
  }

  set align(value: number) {
    this._align = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _num_attack = 1;

  get num_attack(): number {
    return this._num_attack;
  }

  set num_attack(value: number) {
    this._num_attack = value;
  }

  private _level: number;

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  private _thac0: number;

  get thac0(): number {
    return this._thac0;
  }

  set thac0(value: number) {
    this._thac0 = value;
  }

  private _ac: number;

  get ac(): number {
    return this._ac;
  }

  set ac(value: number) {
    this._ac = value;
  }

  private _hp_bonus: number;

  get hp_bonus(): number {
    return this._hp_bonus;
  }

  set hp_bonus(value: number) {
    this._hp_bonus = value;
  }

  private _damage: string;

  get damage(): string {
    return this._damage;
  }

  set damage(value: string) {
    this._damage = value;
  }

  private _gold_exp: boolean;

  get gold_exp(): boolean {
    return this._gold_exp;
  }

  set gold_exp(value: boolean) {
    this._gold_exp = value;
  }

  private _gold: number;

  get gold(): number {
    return this._gold;
  }

  set gold(value: number) {
    this._gold = value;
  }

  private _bonus_exp: number;

  get bonus_exp(): number {
    return this._bonus_exp;
  }

  set bonus_exp(value: number) {
    this._bonus_exp = value;
  }

  private _race: string;

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  private _load_position: string;

  get load_position(): string {
    return this._load_position;
  }

  set load_position(value: string) {
    this._load_position = value;
  }

  private _default_position: string;

  get default_position(): string {
    return this._default_position;
  }

  set default_position(value: string) {
    this._default_position = value;
  }

  private _sex: string;

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  private _resi: string[];

  get resi(): string[] {
    return this._resi;
  }

  set resi(value: string[]) {
    this._resi = value;
  }

  private _immu: string[];

  get immu(): string[] {
    return this._immu;
  }

  set immu(value: string[]) {
    this._immu = value;
  }

  private _susc: string[];

  get susc(): string[] {
    return this._susc;
  }

  set susc(value: string[]) {
    this._susc = value;
  }

  private _in_room_sound = '';

  get in_room_sound(): string {
    return this._in_room_sound;
  }

  set in_room_sound(value: string) {
    this._in_room_sound = value;
  }

  private _next_room_sound = '';

  get next_room_sound(): string {
    return this._next_room_sound;
  }

  set next_room_sound(value: string) {
    this._next_room_sound = value;
  }
}
