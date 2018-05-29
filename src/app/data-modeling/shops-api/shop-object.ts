export class ShopObject {
  private _vnum: number;

  get vnum(): number {
    return this._vnum;
  }

  set vnum(value: number) {
    this._vnum = value;
  }

  private _item_to_sell: number[];

  get item_to_sell(): number[] {
    return this._item_to_sell;
  }

  set item_to_sell(value: number[]) {
    this._item_to_sell = value;
  }

  private _profit_when_selling: number;

  get profit_when_selling(): number {
    return this._profit_when_selling;
  }

  set profit_when_selling(value: number) {
    this._profit_when_selling = value;
  }

  private _profit_when_buying: number;

  get profit_when_buying(): number {
    return this._profit_when_buying;
  }

  set profit_when_buying(value: number) {
    this._profit_when_buying = value;
  }

  private _byy_type: string[];

  get byy_type(): string[] {
    return this._byy_type;
  }

  set byy_type(value: string[]) {
    this._byy_type = value;
  }

  private _msg_itemtobuy_not_exist: string;

  get msg_itemtobuy_not_exist(): string {
    return this._msg_itemtobuy_not_exist;
  }

  set msg_itemtobuy_not_exist(value: string) {
    this._msg_itemtobuy_not_exist = value;
  }

  private _msg_itemtosell_not_exist: string;

  get msg_itemtosell_not_exist(): string {
    return this._msg_itemtosell_not_exist;
  }

  set msg_itemtosell_not_exist(value: string) {
    this._msg_itemtosell_not_exist = value;
  }

  private _msg_shop_not_buy: string;

  get msg_shop_not_buy(): string {
    return this._msg_shop_not_buy;
  }

  set msg_shop_not_buy(value: string) {
    this._msg_shop_not_buy = value;
  }

  private _msg_shop_cant_pay: string;

  get msg_shop_cant_pay(): string {
    return this._msg_shop_cant_pay;
  }

  set msg_shop_cant_pay(value: string) {
    this._msg_shop_cant_pay = value;
  }

  private _msg_player_cant_pay: string;

  get msg_player_cant_pay(): string {
    return this._msg_player_cant_pay;
  }

  set msg_player_cant_pay(value: string) {
    this._msg_player_cant_pay = value;
  }

  private _msg_buy_item: string;

  get msg_buy_item(): string {
    return this._msg_buy_item;
  }

  set msg_buy_item(value: string) {
    this._msg_buy_item = value;
  }

  private _msg_sell_item: string;

  get msg_sell_item(): string {
    return this._msg_sell_item;
  }

  set msg_sell_item(value: string) {
    this._msg_sell_item = value;
  }

  private _temper: string;

  get temper(): string {
    return this._temper;
  }

  set temper(value: string) {
    this._temper = value;
  }

  private _shop_bitvector: string[];

  get shop_bitvector(): string[] {
    return this._shop_bitvector;
  }

  set shop_bitvector(value: string[]) {
    this._shop_bitvector = value;
  }

  private _shopkeeper_vnum: number;

  get shopkeeper_vnum(): number {
    return this._shopkeeper_vnum;
  }

  set shopkeeper_vnum(value: number) {
    this._shopkeeper_vnum = value;
  }

  private _with_who: string[];

  get with_who(): string[] {
    return this._with_who;
  }

  set with_who(value: string[]) {
    this._with_who = value;
  }

  private _shop_room: number;

  get shop_room(): number {
    return this._shop_room;
  }

  set shop_room(value: number) {
    this._shop_room = value;
  }

  private _first_open: number;

  get first_open(): number {
    return this._first_open;
  }

  set first_open(value: number) {
    this._first_open = value;
  }

  private _first_close: number;

  get first_close(): number {
    return this._first_close;
  }

  set first_close(value: number) {
    this._first_close = value;
  }

  private _second_open: number;

  get second_open(): number {
    return this._second_open;
  }

  set second_open(value: number) {
    this._second_open = value;
  }

  private _second_close: number;

  get second_close(): number {
    return this._second_close;
  }

  set second_close(value: number) {
    this._second_close = value;
  }
}
