export enum InventoryCategoryTopics {
  LIST = 'inventory.category.list',
  ID = 'inventory.category.id',
  PARENT = 'inventory.category.parent',
  CREATE = 'inventory.category.create',
  UPDATE = 'inventory.category.update',
  ACTIVATE = 'inventory.category.activate',
  DEACTIVATE = 'inventory.category.deactivate',
  RESTORE = 'inventory.category.restore',
  DELETE = 'inventory.category.delete',
}

export enum InventoryCompanyTopics {
  LIST = 'inventory.company.list',
  ID = 'inventory.company.id',
  CREATE = 'inventory.company.create',
  UPDATE = 'inventory.company.update',
  ACTIVATE = 'inventory.company.activate',
  DEACTIVATE = 'inventory.company.deactivate',
  RESTORE = 'inventory.company.restore',
  DELETE = 'inventory.company.delete',
}

export enum InventoryItemTopics {
  LIST = 'inventory.item.list',
  CATEGORY = 'inventory.item.category',
  COMPANY = 'inventory.item.company',
  LOCATION = 'inventory.item.location',
  SIZE = 'inventory.item.size',
  TYPE = 'inventory.item.type',
  ID = 'inventory.item.id',
  CREATE = 'inventory.item.create',
  UPDATE = 'inventory.item.update',
  ACTIVATE = 'inventory.item.activate',
  DEACTIVATE = 'inventory.item.deactivate',
  RESTORE = 'inventory.item.restore',
  DELETE = 'inventory.item.delete',
}

export enum InventoryLocationTopics {
  LIST = 'inventory.location.list',
  ID = 'inventory.location.id',
  CREATE = 'inventory.location.create',
  UPDATE = 'inventory.location.update',
  ACTIVATE = 'inventory.location.activate',
  DEACTIVATE = 'inventory.location.deactivate',
  RESTORE = 'inventory.location.restore',
  DELETE = 'inventory.location.delete',
}
