import { RootContent } from "mdast";
import {
    alignType,
    BlockquoteNode,
    BreakMarkup,
    CodeMarkup,
    DefinitionMarkup,
    DeleteNode,
    EmphasisNode,
    FootnoteDefinitionNode,
    FootnoteReferenceMarkup,
    HeadingNode,
    HtmlCodeMarkup,
    ImageMarkup,
    IMarkup,
    InlineCodeMarkup,
    INode,
    LinkNode,
    ListItemNode,
    ListNode,
    ParagraphNode,
    StrongNode,
    TableCellNode,
    TableNode,
    TableRowNode,
    TextMarkup,
    ThematicBreakMarkup,
    YamlMarkup,
} from ".";
import { EditorState } from "..";

export type mdastNode = RootContent;

// Backbone Implementaion, may replaced by composition API in the future.
export const transformCommonmark = (
    editorState: EditorState,
    node: mdastNode,
    parent?: INode
): INode | IMarkup => {
    if (node.type === "imageReference") {
        // TODO: This is not implemented and can cause errors!
        return new TextMarkup(editorState, parent);
    }
    if (node.type === "linkReference") {
        // TODO: This is not implemented and can cause errors!
        return new TextMarkup(editorState, parent);
    }
    switch (node.type) {
        case "blockquote": {
            const res = new BlockquoteNode(editorState, parent, [], {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "break": {
            return new BreakMarkup(editorState, parent, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
        case "code": {
            return new CodeMarkup(editorState, parent, node.value, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
        case "definition": {
            return new DefinitionMarkup(
                editorState,
                parent,
                node.identifier,
                node.label || undefined,
                node.url,
                node.title || undefined,
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
        }
        case "delete": {
            const res = new DeleteNode(editorState, parent, [], {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "emphasis": {
            const res = new EmphasisNode(editorState, parent, [], {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "footnoteDefinition": {
            const res = new FootnoteDefinitionNode(
                editorState,
                parent,
                node.identifier,
                node.label || undefined,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "footnoteReference": {
            return new FootnoteReferenceMarkup(
                editorState,
                parent,
                node.identifier,
                node.label || undefined,
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
        }
        case "heading": {
            const res = new HeadingNode(editorState, node.depth, parent, [], {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "html": {
            return new HtmlCodeMarkup(editorState, parent, node.value, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
        case "image": {
            return new ImageMarkup(
                editorState,
                parent,
                node.url,
                node.title || undefined,
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
        }
        case "inlineCode": {
            return new InlineCodeMarkup(editorState, parent, node.value, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
        case "link": {
            const res = new LinkNode(
                editorState,
                node.url,
                node.title || undefined,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "list": {
            const res = new ListNode(
                editorState,
                node.ordered || false,
                node.start || 1,
                node.spread || false,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "listItem": {
            const res = new ListItemNode(
                editorState,
                node.spread || false,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "paragraph": {
            const res = new ParagraphNode(
                editorState,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "strong": {
            const res = new StrongNode(
                editorState,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "table": {
            const res = new TableNode(
                editorState,
                node.align as alignType,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "tableCell": {
            const res = new TableCellNode(
                editorState,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "tableRow": {
            const res = new TableRowNode(
                editorState,
                parent,
                [],
                {
                    start: {
                        lineNumber: node.position?.start.line || 0,
                        column: node.position?.start.column || 0,
                    },
                    end: {
                        lineNumber: node.position?.end.line || 0,
                        column: node.position?.end.column || 0,
                    },
                }
            );
            res.children = node.children.map((child) =>
                transformCommonmark(editorState, child, res)
            );
            return res;
        }
        case "text": {
            return new TextMarkup(editorState, parent, node.value, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
        case "thematicBreak": {
            return new ThematicBreakMarkup(editorState, parent, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            })
        }
        case "yaml": {
            return new YamlMarkup(editorState, parent, node.value, {
                start: {
                    lineNumber: node.position?.start.line || 0,
                    column: node.position?.start.column || 0,
                },
                end: {
                    lineNumber: node.position?.end.line || 0,
                    column: node.position?.end.column || 0,
                },
            });
        }
    }
};
