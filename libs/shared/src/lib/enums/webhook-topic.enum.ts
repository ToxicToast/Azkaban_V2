export enum WebhookInventoryTopics {
  CATEGORYCREATED = 'inventory.category.created',
  COMPANYCREATED = 'inventory.company.created',
  ITEMCREATED = 'inventory.item.created',
  LOCATIONCREATED = 'inventory.location.created',
  SIZECREATED = 'inventory.size.created',
  TYPECREATED = 'inventory.type.created',
  OCRCREATED = 'azkaban.upload.ocr.created',
}

export enum WebhookAuthTopics {
  USERLOGIN = 'azkaban.auth.login',
}
