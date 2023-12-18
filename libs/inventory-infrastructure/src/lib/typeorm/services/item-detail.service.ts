import { ItemDetailService } from '@azkaban/inventory-domain';
import { ItemDetailTypeORMRepository } from '../repositories';
import { CreateItemDetailDto } from '../../dtos';
import { ItemDetailDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class ItemDetailTypeOrmService {
  private readonly domainService: ItemDetailService;

  constructor(private readonly repository: ItemDetailTypeORMRepository) {
    this.domainService = new ItemDetailService(repository);
  }

  async createItemDetail(data: CreateItemDetailDto): Promise<void> {
    await this.domainService.createItemDetail(data);
  }

  async getItemDetailList(): Promise<Array<ItemDetailDao>> {
    return await this.domainService.getItemDetails();
  }

  async getItemDetailById(id: string): Promise<Nullable<ItemDetailDao>> {
    return await this.domainService.getItemDetailById(id);
  }

  async getItemDetailByItemId(item_id: string): Promise<Array<ItemDetailDao>> {
    return await this.domainService.getItemDetailByItemId(item_id);
  }

  async updateItemId(id: string, item_id: string): Promise<void> {
    await this.domainService.updateItemId(id, item_id);
  }

  async updatePurchaseDate(id: string, purchase_date: Date): Promise<void> {
    await this.domainService.updatePurchaseDate(id, purchase_date);
  }

  async updateExpirationDate(
    id: string,
    expiration_date: Nullable<Date>
  ): Promise<void> {
    await this.domainService.updateExpirationDate(id, expiration_date);
  }

  async updateOpeningDate(
    id: string,
    opening_date: Nullable<Date>
  ): Promise<void> {
    await this.domainService.updateOpeningDate(id, opening_date);
  }

  async updateReturnable(id: string, returnable: boolean): Promise<void> {
    await this.domainService.updateReturnable(id, returnable);
  }

  async activateItemDetail(id: string): Promise<void> {
    await this.domainService.activateItemDetail(id);
  }

  async deactivateItemDetail(id: string): Promise<void> {
    await this.domainService.deactivateItemDetail(id);
  }

  async deleteItemDetail(id: string): Promise<void> {
    await this.domainService.deleteItemDetail(id);
  }

  async restoreItemDetail(id: string): Promise<void> {
    await this.domainService.restoreItemDetail(id);
  }
}
