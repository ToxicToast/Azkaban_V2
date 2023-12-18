import { CompanyService } from '@azkaban/inventory-domain';
import { CompanyTypeORMRepository } from '../repositories';
import { CreateCompanyDto } from '../../dtos';
import { CompanyDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class CompanyTypeORMService {
  private readonly domainService: CompanyService;

  constructor(private readonly repository: CompanyTypeORMRepository) {
    this.domainService = new CompanyService(repository);
  }

  async createCompany(data: CreateCompanyDto): Promise<void> {
    await this.domainService.createCompany(data);
  }

  async getCompanyList(): Promise<Array<CompanyDao>> {
    return await this.domainService.getCompanies();
  }

  async getCompanyById(id: string): Promise<Nullable<CompanyDao>> {
    return await this.domainService.getCompanyById(id);
  }

  async getCompanyByTitle(title: string): Promise<Nullable<CompanyDao>> {
    return await this.domainService.getCompanyByTitle(title);
  }

  async updateCompanyTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateCompanySlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async activateCompany(id: string): Promise<void> {
    await this.domainService.activateCompany(id);
  }

  async deactivateCompany(id: string): Promise<void> {
    await this.domainService.deactivateCompany(id);
  }

  async deleteCompany(id: string): Promise<void> {
    await this.domainService.deleteCompany(id);
  }

  async restoreCompany(id: string): Promise<void> {
    await this.domainService.restoreCompany(id);
  }
}
