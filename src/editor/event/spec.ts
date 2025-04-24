import type { ZodSchema } from "zod";

export type IRawEventPayload = unknown;

export type IEventList = Array<IEventListItem<any>>;

export interface IEventListItem<T> {
	eventId: string;
	target: Document;
	eventName: string;
	eventPayloadSchema: ZodSchema<T>;
	listener: (event: T) => void;
	capture: boolean;
}
