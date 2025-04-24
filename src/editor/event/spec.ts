import { EventHandler } from "./handler";

export type IRawEventPayload = unknown;

export type IEventList = Array<IEventListItem<IRawEventPayload>>;

export interface IEventListItem<T extends IRawEventPayload> {
	eventId: string;
	target: Document;
	eventName: string;
	listener: EventHandler<T>;
	capture: boolean;
}
