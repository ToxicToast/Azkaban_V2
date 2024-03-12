import { Nullable } from '../types';

export interface Repository<Domain> {
  save(domain: Domain): Promise<Domain>; // returns the id of the saved domain
  findList(): Promise<Array<Domain>>;
  findById(id: string): Promise<Nullable<Domain>>; // returns the domain or null if not found
  deleteById(id: string): Promise<void>;
}
