/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */


/* eslint-disable */
// @ts-nocheck 
import { Align, MarkedOptions } from './interfaces';
import { Marked } from './marked';

export class Renderer {
  protected options: MarkedOptions;

  constructor(options?: MarkedOptions) {
    this.options = options || Marked.options;
  }

  code(code: string, lang?: string, escaped?: boolean, meta?: string): string {
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    let escapedCode = code //(escaped ? code : this.options.escape(code, true));
    escapedCode = btoa(escapedCode);
    //console.log(escapedCode);
    if (!lang) {
      return `\n<Code code="${escapedCode}" babel="true" language="auto" />\n`;
    }

    const className = this.options.langPrefix + this.options.escape(lang, true);
    return `\n<Code codeClassName="${className}" code="${escapedCode}" babel="true" language="${lang}" />\n`;
    //return `\n<pre><code className="${className}">${escapedCode}</code><pre>\n`;
  }

  blockquote(quote: string): string {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html: string): string {
    return html;
  }

  heading(text: string, level: number, raw: string): string {
    const id: string = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');

    return `<H${level} id="${id}">${text}</H${level}>\n`;
  }

  hr(): string {
    return this.options.xhtml ? '<hr/>\n' : '<hr/>\n';
  }

  list(body: string, ordered?: boolean): string {
    const type = ordered ? 'ol' : 'ul';

    return `\n<Flex direction = "column"> ${body} </Flex>\n`;
  }

  listitem(text: string): string {
    return '<Row><Text>&bull; ' + text + '</Text></Row>\n';
  }

  paragraph(text: string): string {
    return '<Text>' + text + '</Text>\n';
  }

  table(header: string, body: string): string {
    console.log(header);
    return `
      <Flex direction = "column">
        <Flex direction = "column">${header}</Flex>
        <Flex direction = "column">${body}</Flex>
        
      </Flex>
`;
  }

  tablerow(content: string, len: number): string {
    let arr=[];
    for(let i=0;i<len;i++){
      arr.push(1/len);
    }
    let w=JSON.stringify(arr);
    console.log(len,w);
    return '<Row styleType="alternative-fill" weight={'+w+'}>\n' + content + '</Row>\n';
  }

  tablecell(content: string, flags: { header?: boolean; align?: Align }): string {
    if (content==""){
      content="_"
    }
    const type = flags.header ? 'Text' : 'Text';
    //let tag = flags.align ? '<' + type + ' style={{textAlign:"' + flags.align + '"}}>' : '<' + type + '>';
    let tag= flags.header ? `<${type} style={{fontWeight:'bold'}}>`:'<' + type + '>';
    return tag + content + '</' + type + '>\n';
  }

  // *** Inline level renderer methods. ***

  strong(text: string): string {
    return '<Bold>' + text + '</Bold>';
  }

  em(text: string): string {
    return '<I>' + text + '</I>';
  }

  codespan(text: string): string {
    return '<Code code="' + text + '" language="auto" span="true"/>';
  }

  br(): string {
    return this.options.xhtml ? '<br/>' : '<br/>';
  }

  del(text: string): string {
    return '<del>' + text + '</del>';
  }

  link(href: string, title: string, text: string): string {
    if (this.options.sanitize) {
      let prot: string;

      try {
        prot = decodeURIComponent(this.options.unescape(href))
          .replace(/[^\w:]/g, '')
          .toLowerCase();
      } catch (e) {
        return text;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return text;
      }
    }

    let out = '<Link href="' + href + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</Link>';

    return out;
  }

  image(href: string, title: string, text: string): string {
    let out = '<Image style={{width: "fit-content", height: "fit-content"}} source="' + href + '" alt="' + text + '" fit="scale-down"';

    if (title) {
      out += ' title="' + title + '" overlay="true"';
    }

    out += this.options.xhtml ? '/>' : '/>';

    return out;
  }

  text(text: string): string {
    return text;
  }
}
