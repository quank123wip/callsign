import type { IMarkup } from ".";

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
