import {
    IBreakMarkup,
    ICodeMarkup,
    IDefinitionMarkup,
    IFootnoteReferenceMarkup,
    IHtmlCodeMarkup,
    IImageMarkup,
    IInlineCodeMarkup,
    ITextMarkup,
    IThematicBreakMarkup,
    IYamlMarkup,
} from "@/editor/state/document";
import { h, Text } from "vue";

export const renderText = (mark: ITextMarkup) => h(Text, mark.value);

// TODO: Custom Code Components
export const renderCode = (mark: ICodeMarkup) => {
    return h(
        "pre",
        h("code", { class: mark.lang ? `language-${mark.lang}` : undefined }, [
            mark.value,
        ])
    );
};

export const renderInlineCode = (mark: IInlineCodeMarkup) => h("code", [mark.value.replace(/\r?\n|\r/g, " ")]);

// TODO: XSS Protection
export const renderHtmlCode = (mark: IHtmlCodeMarkup) => h(Text, mark.value);

// TODO: YAML Handling
export const renderYaml = (mark: IYamlMarkup) => {};

export const renderBreak = (mark: IBreakMarkup) => h("br");

//TODO
export const renderDefinition = (mark: IDefinitionMarkup) => {};

export const renderImage = (mark: IImageMarkup) => h("img", {src: mark.url, title: mark.title || undefined});

//TODO
export const renderFootnoteReference = (mark: IFootnoteReferenceMarkup) => {};

export const renderThematicBreak = (mark: IThematicBreakMarkup) => h("hr");
