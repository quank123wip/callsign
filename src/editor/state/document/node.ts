import { type IMarkup, type INode, Node } from "./base";
import type { EditorState, IRawPosition } from "..";

export interface IBlockquoteNode extends INode {
	type: "blockquote";
}

export interface IEmphasisNode extends INode {
	type: "emphasis";
}

export interface IHeadingNode extends INode {
	type: "heading";
	depth: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ILinkNode extends INode {
	type: "link";
	url: string;
	title?: string;
}

// Not implementing LinkReference

export interface IListNode extends INode {
	type: "list";
	ordered?: boolean;
	start?: number;
	spread?: boolean;
}

export interface IListItemNode extends INode {
	type: "listItem";
	spread?: boolean;
}

export interface IListItemGfmNode extends INode {
	type: "listItem";
	spread?: boolean;
	checked?: boolean;
}

export interface IParagraphNode extends INode {
	type: "paragraph";
}

export interface IStrongNode extends INode {
	type: "strong";
}

export interface IDeleteNode extends INode {
	type: "delete";
}

export interface IFootnoteDefinitionNode extends INode {
	type: "footnoteDefinition";
	identifier: string;
	label?: string;
}

export type alignType = "left" | "right" | "center" | null;

export interface ITableNode extends INode {
	type: "table";
	align?: alignType;
}

export interface ITableRowNode extends INode {
	type: "tableRow";
}

export interface ITableCellNode extends INode {
	type: "tableCell";
}

export class BlockquoteNode extends Node implements IBlockquoteNode {
	type: "blockquote";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "blockquote", parent, children, rawRange);
		this.type = "blockquote";
	}
}

export class EmphasisNode extends Node implements IEmphasisNode {
	type: "emphasis";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "emphasis", parent, children, rawRange);
		this.type = "emphasis";
	}
}

export class HeadingNode extends Node implements IHeadingNode {
	type: "heading";
	depth: 1 | 2 | 3 | 4 | 5 | 6;
	constructor(
		editorState: EditorState,
		depth?: 1 | 2 | 3 | 4 | 5 | 6,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "heading", parent, children, rawRange);
		this.type = "heading"
		this.depth = depth || 1;
	}
}

export class LinkNode extends Node implements ILinkNode {
	type: "link";
	url: string;
	title?: string;
	constructor(
		editorState: EditorState,
		url?: string,
		title?: string,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "link", parent, children, rawRange);
		this.type = "link";
		this.url = url || '';
		this.title = title;
	}
}

export class ListNode extends Node implements IListNode {
	type: "list";
	ordered: boolean | undefined;
	start: number | undefined;
	spread: boolean | undefined;
	constructor(
		editorState: EditorState,
		ordered?: boolean,
		start?: number,
		spread?: boolean,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "list", parent, children, rawRange);
		this.type = "list";
		this.ordered = ordered;
		this.start = start;
		this.spread = spread;
	}
}

export class ListItemNode extends Node implements IListItemNode {
	type: "listItem";
	spread: boolean | undefined;
	constructor(
		editorState: EditorState,
		spread?: boolean,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "listItem", parent, children, rawRange);
		this.type = "listItem";
		this.spread = spread;
	}
}

export class ListItemGfmNode extends Node implements IListItemGfmNode {
	type: "listItem";
	spread: boolean | undefined;
	checked: boolean | undefined;
	constructor(
		editorState: EditorState,
		spread?: boolean,
		checked?: boolean,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "listItem", parent, children, rawRange);
		this.type = "listItem";
		this.spread = spread;
		this.checked = checked;
	}
}

export class ParagraphNode extends Node implements IParagraphNode {
	type: "paragraph";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "paragraph", parent, children, rawRange);
		this.type = "paragraph";
	}
}

export class StrongNode extends Node implements IStrongNode {
	type: "strong";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "strong", parent, children, rawRange);
		this.type = "strong";
	}
}

export class DeleteNode extends Node implements IDeleteNode {
	type: "delete";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "delete", parent, children, rawRange);
		this.type = "delete";
	}
}

export class FootnoteDefinitionNode extends Node implements IFootnoteDefinitionNode {
	type: "footnoteDefinition";
	identifier: string;
	label: string | undefined;
	constructor(
		editorState: EditorState,
		parent?: INode,
		identifier?: string,
		label?: string,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "footnoteDefinition", parent, children, rawRange);
		this.type = "footnoteDefinition";
		this.identifier = identifier || "";
		this.label = label;
	}
}

export class TableNode extends Node implements ITableNode {
	type: "table";
	align: alignType;
	constructor(
		editorState: EditorState,
		align?: alignType,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "table", parent, children, rawRange);
		this.type = "table";
		this.align = align || null; 
	}
}

export class TableRowNode extends Node implements ITableRowNode {
	type: "tableRow";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "tableRow", parent, children, rawRange);
		this.type = "tableRow";
	}
}

export class TableCellNode extends Node implements ITableCellNode {
	type: "tableCell";
	constructor(
		editorState: EditorState,
		parent?: INode,
		children?: (INode | IMarkup)[],
		rawRange?: { start: IRawPosition; end: IRawPosition },
	) {
		super(editorState, "tableCell", parent, children, rawRange);
		this.type = "tableCell";
	}
}