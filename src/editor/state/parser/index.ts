import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { Root } from 'remark-parse/lib';

export class MarkdownParser {
  private processor = unified()
    .use(remarkParse)
    .use(remarkStringify);

  parse(text: string): Root {
    return this.processor.parse(text);
  }

  stringify(ast: Root): string {
    return this.processor.stringify(ast);
  }
}