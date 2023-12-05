export interface Domain<Anemic> {
  isActive(): boolean;
  isUpdated(): boolean;
  isDeleted(): boolean;
  toAnemic(): Anemic;
}
