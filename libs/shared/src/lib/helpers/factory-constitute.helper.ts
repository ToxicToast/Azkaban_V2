import { Domain } from '../interfaces';

export class FactoryConstituteHelper<Anemic> {
  constitute(domain: Domain<Anemic>): Anemic {
    return domain.toAnemic();
  }
}
