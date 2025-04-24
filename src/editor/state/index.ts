import type { Editor, IEditorConfig } from "../core";
import type { Cursor } from "./cursor";
import { RootNode } from "./document";

export class EditorState {
	editor: Editor;
	config: IEditorConfig;
	cursor: Cursor;
	astRoot: RootNode;
	rawDocument: string;
	// TODO: History Module
	constructor(editor: Editor, config: IEditorConfig) {
		this.editor = editor;
		this.config = config;

		this.cursor = null;
		this.astRoot = new RootNode(this);
		this.rawDocument = "";
	}
}

export * from "./cursor";
export * from "./document";
export * from "./position";
export * from "./transaction";
