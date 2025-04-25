import { Yaml } from "mdast";
import {
    IBlockquoteNode,
    IBreakMarkup,
    ICodeMarkup,
    IDefinitionMarkup,
    IDeleteNode,
    IEmphasisNode,
    IFootnoteDefinitionNode,
    IFootnoteReferenceMarkup,
    IHeadingNode,
    IHtmlCodeMarkup,
    IImageMarkup,
    IInlineCodeMarkup,
    ILinkNode,
    IListItemNode,
    IListNode,
    IParagraphNode,
    IStrongNode,
    ITableCellNode,
    ITableNode,
    ITableRowNode,
    ITextMarkup,
    IThematicBreakMarkup,
    IYamlMarkup,
    type EditorState,
} from "..";
import type { IRawPosition } from "../position";

export type rawMarkdown = string;

export interface INode {
    nodeType: "node";
    type: string;
    parent?: INode;
    children: Array<INode | IMarkup>;
    rawRange: {
        start: IRawPosition;
        end: IRawPosition;
    };
}

export interface IMarkup {
    nodeType: "markup";
    type: string;
    parent?: INode;
    value: string;
    rawRange: {
        start: IRawPosition;
        end: IRawPosition;
    };
}

export class Node implements INode {
    editorState: EditorState;
    nodeType: "node";
    type: string;
    parent?: INode;
    children: (INode | IMarkup)[];
    rawRange: { start: IRawPosition; end: IRawPosition };
    constructor(
        editorState: EditorState,
        type?: string,
        parent?: INode,
        children?: (INode | IMarkup)[],
        rawRange?: { start: IRawPosition; end: IRawPosition }
    ) {
        this.editorState = editorState;
        this.nodeType = "node";
        this.type = type || "";
        this.parent = parent;
        this.children = children || [];
        this.rawRange = rawRange || {
            start: {
                column: 0,
                lineNumber: 0,
            },
            end: {
                column: 0,
                lineNumber: 0,
            },
        };
    }
}

export class Markup implements IMarkup {
    editorState: EditorState;
    nodeType: "markup";
    type: string;
    parent?: INode;
    value: string;
    rawRange: { start: IRawPosition; end: IRawPosition };
    constructor(
        editorState: EditorState,
        type?: string,
        parent?: INode,
        value?: string,
        rawRange?: { start: IRawPosition; end: IRawPosition }
    ) {
        this.editorState = editorState;
        this.nodeType = "markup";
        this.type = type || "";
        this.parent = parent;
        this.value = value || "";
        this.rawRange = rawRange || {
            start: {
                column: 0,
                lineNumber: 0,
            },
            end: {
                column: 0,
                lineNumber: 0,
            },
        };
    }
}

export type ICommonmarkNodes =
    | IBlockquoteNode
    | IBreakMarkup
    | ICodeMarkup
    | IDefinitionMarkup
    | IDeleteNode
    | IEmphasisNode
    | IFootnoteDefinitionNode
    | IFootnoteReferenceMarkup
    | IHeadingNode
    | IHtmlCodeMarkup
    | IImageMarkup
    | IInlineCodeMarkup
    | ILinkNode
    | IListNode
    | IListItemNode
    | IParagraphNode
    | IStrongNode
    | ITableNode
    | ITableCellNode
    | ITableRowNode
    | ITextMarkup
    | IThematicBreakMarkup
    | IYamlMarkup;

export * from "./markup";
export * from "./node";
export * from "./root";
export * from "./util";
