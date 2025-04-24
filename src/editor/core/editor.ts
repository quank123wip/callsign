import { EventHandler, type IEventHandler } from "../event/handler";
import type { rawMarkdown } from "../state";
import { type IUIHelper, UIHelper } from "../ui";
import { DefaultEditorConfig, type IEditorConfig } from "./config";

export interface IEditor {
	container: HTMLElement;
	config: IEditorConfig;
	markdown: rawMarkdown;
	eventHandler: IEventHandler<any>[];
	uiHelper: IUIHelper;
}

export class Editor implements IEditor {
	container: HTMLElement;
	config: IEditorConfig;
	markdown: rawMarkdown;
	eventHandler: IEventHandler<any>[];
	uiHelper: IUIHelper;

	constructor(containerElement: HTMLElement, config: IEditorConfig) {
		this.container = getEditorElement(containerElement);
		this.config = Object.assign({}, DefaultEditorConfig, config);
		this.markdown = config.markdown || "";
		this.eventHandler = [];
		this.uiHelper = new UIHelper();
	}
}

const getEditorElement = (containerElement: HTMLElement): HTMLElement => {
	const newElement = document.createElement("div");

	containerElement.replaceWith(newElement);
	return newElement;
};
