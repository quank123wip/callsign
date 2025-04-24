import { Root } from "remark-parse/lib";
import type { EditorState } from "..";
import type { RawPosition } from "../position";
import type { IMarkup, INode, ITextMarkup } from "./";
import { transformCommonmark } from "./transformer";

export interface IRootNode extends INode {
	type: "root";
}

export class RootNode implements IRootNode {
	nodeType: "node";
	type: "root";
	children: (INode | IMarkup)[];
	rawRange: { start: RawPosition; end: RawPosition };
	constructor(editorState: EditorState) {
		this.type = "root";
		this.nodeType = "node";
		this.children = [
			{
				type: "text",
				value: "",
			} as ITextMarkup,
		];
		this.rawRange = {
			start: {
				editorState,
				column: 0,
				lineNumber: 0,
			},
			end: {
				editorState,
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

		return newRoot;
	}
}
