import slugify from 'slugify';

export class SlugHelper {
  readonly value: string;
  readonly valid: boolean = true;

  constructor(value: string) {
    this.value = this.slugifyConfig(value);
  }

  static create(title: string): SlugHelper {
    return new SlugHelper(title);
  }

  private slugifyConfig(value) {
    return slugify(value, {
      replacement: '-',
      lower: true,
      strict: true,
      locale: 'en',
      trim: true,
    });
  }
}
