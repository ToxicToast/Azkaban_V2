import { v4, validate } from 'uuid';

export class UuidHelper {
  readonly value: string;
  readonly valid: boolean = false;

  constructor(value: string) {
    this.value = value;
    this.valid = this.validate();
  }

  static create(): UuidHelper {
    return new UuidHelper(v4());
  }

  private validate(): boolean {
    return validate(this.value);
  }
}
