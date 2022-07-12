export class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}