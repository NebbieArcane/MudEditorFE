export class ExtraDescription {
  private _keyword_list: string[];

  get keyword_list(): string[] {
    return this._keyword_list;
  }

  set keyword_list(value: string[]) {
    this._keyword_list = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
