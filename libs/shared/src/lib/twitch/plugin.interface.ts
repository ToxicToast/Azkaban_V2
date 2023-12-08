import { Events } from './events.enum';

export interface Plugin<EventData> {
  name: string;
  event: Events;
  execute: (data: EventData) => void;
}
