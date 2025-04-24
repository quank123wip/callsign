import { EventHandler, IEventHandler } from "../event/handler";
import { rawMarkdown } from "../state";
import { IUIHelper, UIHelper } from "../ui";
import { DefaultEditorConfig, IEditorConfig } from "./config";

export interface IEditor {
	container: HTMLElement;
	config: IEditorConfig;
	markdown: rawMarkdown;
	eventHandler: IEventHandler;
	uiHelper: IUIHelper;
}

export class Editor implements IEditor {
	container: HTMLElement;
	config: IEditorConfig;
	markdown: rawMarkdown;
	eventHandler: IEventHandler;
	uiHelper: IUIHelper;

	constructor(containerElement: HTMLElement, config: IEditorConfig) {
		this.container = getEditorElement(containerElement);
		this.config = Object.assign({}, DefaultEditorConfig, config);
		this.markdown = config.markdown || "";
		this.eventHandler = new EventHandler();
		this.uiHelper = new UIHelper();
	}
}

const getEditorElement = (containerElement: HTMLElement): HTMLElement => {
	const newElement = document.createElement("div");

	containerElement.replaceWith(newElement);
	return newElement;
};
