import { ZodSchema } from "zod";

export type IRawEventPayload = unknown;

export type IEventList = Array<IEventListItem<any>>;

export interface IEventListItem<T> {
	eventId: String;
	target: Document;
	eventName: String;
	eventPayloadSchema: ZodSchema<T>;
	listener: (event: T) => void;
	capture: Boolean;
}
