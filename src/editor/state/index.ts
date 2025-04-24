import type { Editor, IEditorConfig } from "../core";
import type { Cursor } from "./cursor";
import { RootNode } from "./document";
import { MarkdownParser } from "./parser";

export class EditorState {
	editor?: Editor;
	config?: IEditorConfig;
	cursor: Cursor;
	astRoot: RootNode;
	rawDocument: string;
	markdownParser: MarkdownParser; // May replaced by composition API in the future.
	// TODO: History Module
	constructor(editor?: Editor, config?: IEditorConfig, markdown?: string) {
		this.editor = editor;
		this.config = config;

		this.cursor = null;
		this.astRoot = new RootNode(this);
		this.rawDocument = markdown || '';
		this.markdownParser = new MarkdownParser;

		if (markdown) {
			this.astRoot = this.astRoot.fromUnistRoot(this, this.markdownParser.parse(markdown));
		}
	}
}

export * from "./cursor";
export * from "./document";
export * from "./parser";
export * from "./position";
export * from "./transaction";
