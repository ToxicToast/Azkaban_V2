export interface Mapper<Domain, Entity> {
  domainToEntity(domain: Domain): Entity;
  entityToDomain(entity: Entity): Domain;
}
