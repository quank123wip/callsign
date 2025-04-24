import { type IMarkup, type INode, Node } from ".";
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

type alignType = "left" | "right" | "center" | null;

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
