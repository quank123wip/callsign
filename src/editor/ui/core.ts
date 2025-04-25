import { Editor } from "../core";
import { EditorState } from "../state";

export interface IUIHelper {
	container: HTMLElement;
}

export class UIHelper implements IUIHelper {
	editor: Editor;
	state: EditorState;
	container: HTMLElement;
	constructor(editor: Editor) {
		this.editor = editor;
		this.state = editor.state;
		this.container = editor.container;
		this.init();
	}

	init () {
		this.container.classList.add("callsign-editor");
		this.container.setAttribute("contentEditable", "true");
	}
}
