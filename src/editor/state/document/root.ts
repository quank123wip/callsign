import { Root } from "remark-parse/lib";
import type { EditorState } from "..";
import type { IRawPosition } from "../position";
import { Node, type IMarkup, type INode, type ITextMarkup } from "./";
import { transformCommonmark } from "./transformer";

export interface IRootNode extends INode {
	type: "root";
}

export class RootNode extends Node implements IRootNode {
	nodeType: "node";
	type: "root";
	parent: undefined;
	children: (INode | IMarkup)[];
	rawRange: { start: IRawPosition; end: IRawPosition };
	constructor(editorState: EditorState) {
		super(editorState, "root", undefined)
		this.type = "root";
		this.nodeType = "node";
		this.parent = undefined;
		this.children = [
			{
				type: "text",
				value: "",
			} as ITextMarkup,
		];
		this.rawRange = {
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

	firstMark(): IMarkup {
		const findFirstMark = (node: INode | IMarkup): IMarkup | undefined => {
			if (node.nodeType == "markup") return node;
			if (!node.children || !node.children.length) return undefined;
			for (const child of node.children) {
				const res = findFirstMark(child);
				if (res) return res;
			}
			return undefined;
		};
		const res = findFirstMark(this);
		if (!res) throw Error("No markup node in root. The AST is broken.");
		return res;
	}

	fromUnistRoot(editorState: EditorState, ASTRoot: Root): RootNode {
		let newRoot = new RootNode(editorState)

		newRoot.children = [];
		
		for (let child of ASTRoot.children) {
			newRoot.children.push(transformCommonmark(editorState, child, newRoot));
		}

		newRoot.rawRange = {
			start: {
				lineNumber: ASTRoot.position?.start.line || 0,
				column: ASTRoot.position?.start.column || 0,
			},
			end: {
				lineNumber: ASTRoot.position?.end.line || 0,
				column: ASTRoot.position?.end.column || 0,
			},
		}

		return newRoot;
	}
}
