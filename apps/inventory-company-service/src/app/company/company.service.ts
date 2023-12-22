import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  CompanyDao,
  CompanyTypeORMEntity,
  CompanyTypeORMRepository,
  CompanyTypeORMService,
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@azkaban/inventory-infrastructure';

@Injectable()
export class CompanyService {
  private readonly infrastructureRepository: CompanyTypeORMRepository;
  private readonly infrastructureService: CompanyTypeORMService;

  constructor(
    @Inject('COMPANY_REPOSITORY')
    private readonly companyRepository: Repository<CompanyTypeORMEntity>
  ) {
    this.infrastructureRepository = new CompanyTypeORMRepository(
      this.companyRepository
    );
    this.infrastructureService = new CompanyTypeORMService(
      this.infrastructureRepository
    );
  }

  async getList(): Promise<Array<CompanyDao>> {
    return await this.infrastructureService.getCompanyList();
  }

  async getById(id: string): Promise<CompanyDao> {
    return await this.infrastructureService.getCompanyById(id);
  }

  async createCompany(data: CreateCompanyDto): Promise<void> {
    await this.infrastructureService.createCompany(data);
  }

  async updateCompany(id: string, data: UpdateCompanyDto): Promise<void> {
    if (data.title) {
      await this.infrastructureService.updateCompanyTitle(id, data.title);
    } else if (data.slug) {
      await this.infrastructureService.updateCompanySlug(id, data.slug);
    }
  }

  async activateCompany(id: string): Promise<void> {
    await this.infrastructureService.activateCompany(id);
  }

  async deactivateCompany(id: string): Promise<void> {
    await this.infrastructureService.deactivateCompany(id);
  }

  async deleteCompany(id: string): Promise<void> {
    await this.infrastructureService.deleteCompany(id);
  }

  async restoreCompany(id: string): Promise<void> {
    await this.infrastructureService.restoreCompany(id);
  }
}
