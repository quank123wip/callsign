import { INode, Markup, type IMarkup } from ".";
import { EditorState, IRawPosition } from "..";

export interface ITextMarkup extends IMarkup {
	type: "text";
}

export interface ICodeMarkup extends IMarkup {
	type: "code";
	lang?: string;
	meta?: string;
}

export interface IInlineCodeMarkup extends IMarkup {
	type: "inline-code";
}

export interface IHtmlCodeMarkup extends IMarkup {
	type: "html";
}

export interface IYamlMarkup extends IMarkup {
	type: "yaml";
}

export interface IBreakMarkup extends IMarkup {
	type: "break";
	value: "";
}

export interface IDefinitionMarkup extends IMarkup {
	type: "definition";
	value: "";
	identifier: string;
	label?: string;
	url: string;
	title?: string;
}

export interface IImageMarkup extends IMarkup {
	type: "image";
	value: "";
	url: string;
	title?: string;
}

// Not implementing ImageReference

export interface IFootnoteReferenceMarkup extends IMarkup {
	type: "footnoteReference";
	value: "";
	identifier: string;
	label?: string;
}

export interface IThematicBreak extends IMarkup {
	type: "thematicBreak";
	value: "";
}

export class TextMarkup extends Markup implements ITextMarkup {
	type: "text";
	constructor(
		editorState: EditorState,
		parent?: INode,
		value?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "text", parent, value, rawRange);
		this.type = "text";
	}
}

export class CodeMarkup extends Markup implements ICodeMarkup {
	type: "code";
	lang?: string;
	meta?: string;

	constructor(
		editorState: EditorState,
		parent?: INode,
		value?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
		lang?: string,
		meta?: string,
	) {
		super(editorState, "code", parent, value, rawRange);
		this.type = "code";
		this.lang = lang;
		this.meta = meta;
	}
}

export class InlineCodeMarkup extends Markup implements IInlineCodeMarkup {
	type: "inline-code";
	constructor(
		editorState: EditorState,
		parent?: INode,
		value?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "inline-code", parent, value, rawRange);
		this.type = "inline-code";
	}
}

export class HtmlCodeMarkup extends Markup implements IHtmlCodeMarkup {
	type: "html";
	constructor(
		editorState: EditorState,
		parent?: INode,
		value?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "html", parent, value, rawRange);
		this.type = "html";
	}
}

export class YamlMarkup extends Markup implements IYamlMarkup {
	type: "yaml";
	constructor(
		editorState: EditorState,
		parent?: INode,
		value?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "yaml", parent, value, rawRange);
		this.type = "yaml";
	}
}

export class BreakMarkup extends Markup implements IBreakMarkup {
	type: "break";
	value: "";

	constructor(
		editorState: EditorState,
		parent?: INode,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "break", parent, "", rawRange);
		this.type = "break";
		this.value = "";
	}
}

export class DefinitionMarkup extends Markup implements IDefinitionMarkup {
	type: "definition";
	value: "";
	identifier: string;
	label?: string;
	url: string;
	title?: string;

	constructor(
		editorState: EditorState,
		parent?: INode,
		identifier: string = "",
		label?: string,
		url: string = "",
		title?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "definition", parent, "", rawRange);
		this.type = "definition";
		this.value = "";
		this.identifier = identifier;
		this.label = label;
		this.url = url;
		this.title = title;
	}
}

export class ImageMarkup extends Markup implements IImageMarkup {
	type: "image";
	value: "";
	url: string;
	title?: string;

	constructor(
		editorState: EditorState,
		parent?: INode,
		url: string = "",
		title?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "image", parent, "", rawRange);
		this.type = "image";
		this.value = "";
		this.url = url;
		this.title = title;
	}
}

export class FootnoteReferenceMarkup extends Markup implements IFootnoteReferenceMarkup {
	type: "footnoteReference";
	value: "";
	identifier: string;
	label?: string;

	constructor(
		editorState: EditorState,
		parent?: INode,
		identifier: string = "",
		label?: string,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "footnoteReference", parent, "", rawRange);
		this.type = "footnoteReference";
		this.value = "";
		this.identifier = identifier;
		this.label = label;
	}
}

export class ThematicBreakMarkup extends Markup implements IThematicBreak {
	type: "thematicBreak";
	value: "";

	constructor(
		editorState: EditorState,
		parent?: INode,
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "thematicBreak", parent, "", rawRange);
		this.type = "thematicBreak";
		this.value = "";
	}
}