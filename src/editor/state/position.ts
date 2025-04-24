import { EditorState } from ".";
import { getMarkupOffsetFromRawpos, IMarkup, travelNext } from "./document";

export interface IRawPosition {
    column: number;
    lineNumber: number;
}

export interface IPosition {
    rawPosition: IRawPosition;
    parentMarkup?: IMarkup;
    offset: number;
}

export class RawPosition implements IRawPosition {
    editorState: EditorState;
    column: number;
    lineNumber: number;
    constructor (editorState: EditorState, column?: number, lineNumber?: number) {
        this.editorState = editorState;
        this.column = column || 0;
        this.lineNumber = lineNumber || 0;
    }
}

export class Position implements IPosition {
    editorState: EditorState;
    rawPosition: IRawPosition;
    parentMarkup?: IMarkup;
    offset: number;
    constructor(editorState: EditorState, rawPos?: RawPosition, parentMarkup?: IMarkup, offset?: number) {
        // TODO: Position Initialization Process
        this.editorState = editorState;
        this.rawPosition = rawPos || {
            column: 0,
            lineNumber: 0
        };
        this.parentMarkup = parentMarkup || undefined;
        this.offset = offset || 0;
    }

    fromRawPos(editorState: EditorState, rawPos: IRawPosition) {
        let currentMark = editorState.astRoot.firstMark();

        while (currentMark.rawRange.start.lineNumber < rawPos.lineNumber)
            currentMark = travelNext(currentMark);

        if (currentMark.rawRange.start.lineNumber > rawPos.lineNumber)
            throw new Error("Can't find rawPos.")
        
        while (currentMark.rawRange.start.column < rawPos.column)
            currentMark = travelNext(currentMark);

        if (currentMark.rawRange.start.column > rawPos.column || currentMark.rawRange.start.lineNumber > rawPos.lineNumber)
            throw new Error("Can't find rawPos.")

        const offset = getMarkupOffsetFromRawpos(editorState, currentMark, rawPos);

        return new Position(
            editorState, 
            {
                editorState,
                ...rawPos
            },
            currentMark,
            offset,
        )
    }
}