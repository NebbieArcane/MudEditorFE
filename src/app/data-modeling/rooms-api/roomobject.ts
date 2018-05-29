import {RoomExitObject} from "./room-exit-object";
import {RoomExtraObject} from "./room-extra-object";

export class RoomObject {

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _reserved: number;

  get reserved(): number {
    return this._reserved;
  }

  set reserved(value: number) {
    this._reserved = value;
  }

  private _flags: string[];

  get flags(): string[] {
    return this._flags;
  }

  set flags(value: string[]) {
    this._flags = value;
  }

  private _sectorType: string;

  get sectorType(): string {
    return this._sectorType;
  }

  set sectorType(value: string) {
    this._sectorType = value;
  }

  private _exits: RoomExitObject[];

  get exits(): RoomExitObject[] {
    return this._exits;
  }

  set exits(value: RoomExitObject[]) {
    this._exits = value;
  }

  private _extras: RoomExtraObject[];

  get extras(): RoomExtraObject[] {
    return this._extras;
  }

  set extras(value: RoomExtraObject[]) {
    this._extras = value;
  }
}
