import { renderBlockquote, renderDelete, renderEmphasis, renderFootnoteDefinition, renderHeading, renderLink, renderList, renderListItem, renderParagraph, renderStrong, renderTable, renderTableCell, renderTableRow } from "./node";
import { renderBreak, renderCode, renderDefinition, renderFootnoteReference, renderHtmlCode, renderImage, renderInlineCode, renderText, renderThematicBreak, renderYaml } from "./markup";
import { VNode } from "vue";
import { INode, IMarkup, IBlockquoteNode, IBreakMarkup, ICodeMarkup, IDefinitionMarkup, IDeleteNode, IEmphasisNode, IFootnoteDefinitionNode, IFootnoteReferenceMarkup, IHeadingNode, IHtmlCodeMarkup, IImageMarkup, IInlineCodeMarkup, ILinkNode, IListNode, IListItemNode, IParagraphNode, IStrongNode, ITableNode, ITableCellNode, ITableRowNode, ITextMarkup, IThematicBreakMarkup, IYamlMarkup } from "@/editor/state/document";

export const render = (node: (INode | IMarkup)): VNode | void => {
    switch (node.type) {
        case "blockquote": {
            return renderBlockquote(node as IBlockquoteNode);
        }
        case "break": {
            return renderBreak(node as IBreakMarkup);
        }
        case "code": {
            return renderCode(node as ICodeMarkup);
        }
        case "definition": {
            return renderDefinition(node as IDefinitionMarkup);
        }
        case "delete": {
            return renderDelete(node as IDeleteNode);
        }
        case "emphasis": {
            return renderEmphasis(node as IEmphasisNode);
        }
        case "footnoteDefinition": {
            return renderFootnoteDefinition(node as IFootnoteDefinitionNode);
        }
        case "footnoteReference": {
            return renderFootnoteReference(node as IFootnoteReferenceMarkup);
        }
        case "heading": {
            return renderHeading(node as IHeadingNode);
        }
        case "html": {
            return renderHtmlCode(node as IHtmlCodeMarkup);
        }
        case "image": {
            return renderImage(node as IImageMarkup);
        }
        case "inline-code": {
            return renderInlineCode(node as IInlineCodeMarkup);
        }
        case "link": {
            return renderLink(node as ILinkNode);
        }
        case "list": {
            return renderList(node as IListNode);
        }
        case "listItem": {
            return renderListItem(node as IListItemNode);
        }
        case "paragraph": {
            return renderParagraph(node as IParagraphNode);
        }
        case "strong": {
            return renderStrong(node as IStrongNode);
        }
        case "table": {
            return renderTable(node as ITableNode);
        }
        case "tableCell": {
            return renderTableCell(node as ITableCellNode);
        }
        case "tableRow": {
            return renderTableRow(node as ITableRowNode);
        }
        case "text": {
            return renderText(node as ITextMarkup);
        }
        case "thematicBreak": {
            return renderThematicBreak(node as IThematicBreakMarkup);
        }
        case "yaml": {
            return renderYaml(node as IYamlMarkup);
        }
    }
}

export * from "./markup";
export * from "./node";