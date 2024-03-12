import { Nullable } from '@azkaban/shared';
import { CompanyAnemic } from '../anemics';
import { CompanyData } from '../data';
import { CompanyFactory } from '../factories';
import { CompanyRepository } from '../repositories';

export class CompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async save(anemic: CompanyAnemic): Promise<CompanyAnemic> {
    return await this.repository.save(anemic);
  }

  async createCompany(data: CompanyData): Promise<CompanyAnemic> {
    const factory = new CompanyFactory();
    const aggregate = factory.createFactory(data);
    return await this.save(aggregate.toAnemic());
  }

  async getCompanies(): Promise<Array<CompanyAnemic>> {
    return await this.repository.findList();
  }

  async getCompanyById(id: string): Promise<Nullable<CompanyAnemic>> {
    return await this.repository.findById(id);
  }

  async getCompanyByTitle(title: string): Promise<Nullable<CompanyAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateCompany(id: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateCompany(id: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteCompany(id: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreCompany(id: string): Promise<void> {
    const category = await this.getCompanyById(id);
    if (category !== null) {
      const aggregate = new CompanyFactory().reconstitute(category);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
