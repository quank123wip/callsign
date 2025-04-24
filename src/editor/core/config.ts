import { rawMarkdown } from "../state";

export interface IEditorConfig {
    markdown?: rawMarkdown;
}

export const DefaultEditorConfig: IEditorConfig = {
    markdown: '',
}