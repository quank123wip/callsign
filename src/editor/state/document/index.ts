import { IRawPosition } from "../position";

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
    parent: INode;
    value: string;
    rawRange: {
        start: IRawPosition;
        end: IRawPosition;
    }
}

export * from './markup'
export * from './node'
export * from './root'
export * from './util'