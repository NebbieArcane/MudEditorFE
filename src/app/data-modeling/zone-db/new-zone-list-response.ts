import {ZoneListObject} from "./zone-list-object";

export class NewZoneListResponse {
  private _err_code: string;

  get err_code(): string {
    return this._err_code;
  }

  set err_code(errorCode: string) {
    this._err_code = errorCode;
  }

  private _status: string;

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }

  private _reason: string;

  get reason(): string {
    return this._reason;
  }

  set reason(reason: string) {
    this._reason = reason;
  }

  private _zone: ZoneListObject;

  get zone(): ZoneListObject {
    return this._zone;
  }

  set zone(zone: ZoneListObject) {
    this._zone = zone;
  }
}
