import type { EditorState, INode, IMarkup } from ".";
import { Position } from "./position";

export interface ICursorState {
	type: "cursor";
	position: Position;
}

export interface ISelectionState {
	type: "selection";
	position: {
		anchor: Position;
		cursor: Position;
	};
}

// Selecting single whole block like an image.
export interface IBlockSelectionState {
	type: "blockSelection";
	position: INode | IMarkup;
}

export class CursorState implements ICursorState {
	editorState: EditorState;
	type: "cursor";
	position: Position;
	constructor(editorState: EditorState, position: Position) {
		this.editorState = editorState;
		this.type = "cursor";
		this.position = position;
	}
}

export class SelectionState implements ISelectionState {
	editorState: EditorState;
	type: "selection";
	position: {
		anchor: Position;
		cursor: Position;
	};
	constructor(
		editorState: EditorState,
		anchor?: Position,
		cursor?: Position,
	) {
		this.editorState = editorState;
		this.type = "selection";
		if (anchor && cursor) {
			this.position = {
				anchor,
				cursor,
			};
		}
		this.position = {
			anchor: new Position(editorState),
			cursor: new Position(editorState),
		};
	}
}

export class BlockSelectionState implements IBlockSelectionState {
	editorState: EditorState;
	type: "blockSelection";
	position: INode | IMarkup;
	constructor(editorState: EditorState, node: INode | IMarkup) {
		this.editorState = editorState;
		this.type = "blockSelection";
		this.position = node;
	}
}

/**
 * Cursor state definition for the editor.
 *
 * @comment CursorState represents a cursor in the editor area.
 *
 * @comment SelectionState represents a selection area(with an anchor and a moving cursor) in the editor area.
 *
 * @comment null indicates no cursor in the editor area. (Usually because the editor isn't focused.)
 *
 */
export type Cursor = CursorState | SelectionState | BlockSelectionState | null;
