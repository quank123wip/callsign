import { IRawEventPayload } from "./spec";

export interface IEventHandler<T extends IRawEventPayload>{
	eventName: string;
	handler: (payload: T) => void;
}

export class EventHandler<T> implements IEventHandler<T> {
	eventName: string;
	handler: (payload: T) => void;
	constructor(eventName: string = '', handler: (payload: T) => void = (payload: T) => {}) {
		this.eventName = eventName;
		this.handler = handler;
	}
}
