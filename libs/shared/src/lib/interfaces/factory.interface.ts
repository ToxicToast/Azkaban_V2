export interface Factory<Anemic, Domain, Data> {
  reconstitute(anemic: Anemic): Domain;
  constitute(domain: Domain): Anemic;
  createFactory(data: Data): Domain;
}
