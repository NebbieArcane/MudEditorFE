export class ZoneListObject {

  private id: number;
  private userId: number;
  private start: number;
  private end: number;
  private path: string;
  private name: string;
  private status: string;

  get _id(): number {
    return this.id;
  }

  set _id(id: number) {
    this.id = id;
  }

  get _userId(): number {
    return this.userId;
  }

  set _userId(userId: number) {
    this.userId = userId;
  }

  get _start(): number {
    return this.start;
  }

  set _start(start: number) {
    this.start = start;
  }

  get _end(): number {
    return this.end;
  }

  set _end(end: number) {
    this.end = end;
  }

  get _path(): string {
    return this.path;
  }

  set _path(path: string) {
    this.path = path;
  }

  get _name(): string {
    return this.name;
  }

  set _name(name: string) {
    this.name = name;
  }

  get _status(): string {
    return this.status;
  }

  set _status(status: string) {
    this.status = status;
  }
}
