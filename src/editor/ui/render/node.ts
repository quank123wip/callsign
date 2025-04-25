import { h } from "vue";
import {
    IBlockquoteNode,
    IDeleteNode,
    IEmphasisNode,
    IFootnoteDefinitionNode,
    IHeadingNode,
    ILinkNode,
    IListItemGfmNode,
    IListItemNode,
    IListNode,
    IParagraphNode,
    IStrongNode,
    ITableCellNode,
    ITableNode,
    ITableRowNode,
} from "@/editor/state/document";
import { render } from ".";

export const renderBlockquote = (node: IBlockquoteNode) =>
    h(
        "blockquote",
        node.children.map((child) => render(child))
    );

export const renderEmphasis = (node: IEmphasisNode) =>
    h(
        "em",
        node.children.map((child) => render(child))
    );

export const renderHeading = (node: IHeadingNode) =>
    h(
        "h" + node.depth,
        node.children.map((child) => render(child))
    );

//TODO: XSS Protection
export const renderLink = (node: ILinkNode) =>
    h(
        "a",
        { href: node.url, title: node.title || undefined },
        node.children.map((child) => render(child))
    );

//TODO
export const renderList = (node: IListNode) => {};

//TODO
export const renderListItem = (node: IListItemNode | IListItemGfmNode) => {};

export const renderParagraph = (node: IParagraphNode) => h(
    "p",
    node.children.map((child) => render(child))
);;

export const renderStrong = (node: IStrongNode) => h(
    "strong",
    node.children.map((child) => render(child))
);

export const renderDelete = (node: IDeleteNode) => h(
    "del",
    node.children.map((child) => render(child))
);

//TODO
export const renderFootnoteDefinition = (node: IFootnoteDefinitionNode) => {};

//TODO
export const renderTable = (node: ITableNode) => {};

//TODO
export const renderTableRow = (node: ITableRowNode) => {};

//TODO
export const renderTableCell = (node: ITableCellNode) => {};
