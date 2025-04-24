import { IMarkup, INode } from ".";
import { EditorState } from "..";
import { IRawPosition } from "../position";

export const travelPrev = (node: IMarkup): IMarkup => {
	let currentNode: INode | IMarkup = node;
	while (currentNode == node || currentNode.nodeType == "node") {
		if (!currentNode.parent) {
			throw new Error(
				"Reached the end of the document sequence; no next node exists after the starting markup.",
			);
		}

		const parent: INode = currentNode.parent;

		const siblings = parent.children;

		if (!siblings || !Array.isArray(siblings)) {
			throw new Error(
				`Parent node (type: ${parent.type}) does not have a valid children array. AST might be inconsistent.`,
			);
		}

		const currentIndex = siblings.indexOf(currentNode);

		if (currentIndex === -1) {
			// This indicates a corrupted AST where a node's parent is set,
			// but the node isn't in the parent's children list.
			const nodeIdentifier =
				currentNode.nodeType === "node"
					? currentNode.type
					: `${currentNode.type} (markup)`;
			throw new Error(
				`Node (${nodeIdentifier}) not found within its parent's (type: ${parent.type}) children array. AST might be inconsistent.`,
			);
		}

		if (currentIndex > 0) {
			currentNode = siblings[currentIndex - 1];
		} else {
			currentNode = parent;
		}

		if (currentNode.nodeType == "markup") return currentNode;
	}

	throw new Error(
		"Reached the end of the document sequence; no next node exists after the starting markup.",
	);
};

export const travelNext = (node: IMarkup): IMarkup => {
	let currentNode: INode | IMarkup = node;
	while (currentNode == node || currentNode.nodeType == "node") {
		if (!currentNode.parent) {
			throw new Error(
				"Reached the end of the document sequence; no next node exists after the starting markup.",
			);
		}

		const parent: INode = currentNode.parent;

		const siblings = parent.children;

		if (!siblings || !Array.isArray(siblings)) {
			throw new Error(
				`Parent node (type: ${parent.type}) does not have a valid children array. AST might be inconsistent.`,
			);
		}

		const currentIndex = siblings.indexOf(currentNode);

		if (currentIndex === -1) {
			// This indicates a corrupted AST where a node's parent is set,
			// but the node isn't in the parent's children list.
			const nodeIdentifier =
				currentNode.nodeType === "node"
					? currentNode.type
					: `${currentNode.type} (markup)`;
			throw new Error(
				`Node (${nodeIdentifier}) not found within its parent's (type: ${parent.type}) children array. AST might be inconsistent.`,
			);
		}

		if (currentIndex < siblings.length - 1) {
			currentNode = siblings[currentIndex + 1];
		} else {
			currentNode = parent;
		}

		if (currentNode.nodeType == "markup") return currentNode;
	}

	throw new Error(
		"Reached the end of the document sequence; no next node exists after the starting markup.",
	);
};

export const getMarkupOffsetFromRawpos = (
	editorState: EditorState,
	node: IMarkup,
	rawPos: IRawPosition,
): number => {
	let offset = 0;
	let lines = editorState.rawDocument.match(/.*?(\r\n|\n)|.+$/g) || [""];

	for (let i = node.rawRange.start.lineNumber; i < rawPos.lineNumber; i++)
		offset += lines[i].length;

	offset += rawPos.column;
	return offset;
};
