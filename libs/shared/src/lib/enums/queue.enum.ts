export enum Queues {
  AZKABAN_OCR = 'azkaban_ocr_queue',
  AZKABAN_WEBHOOK = 'azkaban_webhook_queue',
  AZKABAN_AUTH = 'azkaban_auth_queue',
  AZKABAN_HOMEASSISTANT = 'azkaban_homeassistant_queue',
  // Inventory
  INVENTORY_CATEGORIES = 'inventory_category_queue',
  INVENTORY_COMPANIES = 'inventory_company_queue',
  INVENTORY_ITEMS = 'inventory_item_queue',
  INVENTORY_LOCATION = 'inventory_location_queue',
  INVENTORY_SIZE = 'inventory_size_queue',
  INVENTORY_TYPE = 'inventory_type_queue',
  INVENTORY_WAREHOUSE = 'inventory_warehouse_queue',
  // Twitch
  TWITCH_CHANNELS = 'twitch_channel_queue',
  TWITCH_MESSAGES = 'twitch_message_queue',
  TWITCH_STREAMS = 'twitch_stream_queue',
  TWITCH_USERS = 'twitch_user_queue',
  TWITCH_BOT = 'twitch_bot_queue',
}
