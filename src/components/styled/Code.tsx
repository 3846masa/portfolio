import React from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';
import unified from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import find from 'unist-util-find';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

interface Props {
  className: string;
  children: string;
}

const processor = unified()
  .use(rehypeParse)
  .use(() => (tree: any) => ({
    type: 'root',
    children: find(tree, { tagName: 'body' }).children,
  }))
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {},
  })
  .freeze();

const Code: React.SFC<Props> = ({ className, children }) => {
  const langName = (className.match(/language-(\w+)/) || [])[1];
  if (!langName || !Prism.languages[langName]) {
    return <StyledInlineCode>{children}</StyledInlineCode>;
  }
  const html = Prism.highlight(React.Children.toArray(children).join(''), Prism.languages[langName]);
  return <StyledCode className={className}>{processor.processSync(html).contents}</StyledCode>;
};

Code.defaultProps = {
  className: '',
};

export default Code;

const StyledInlineCode = styled.code`
  font-family: 'Source Code Pro', 'Noto Sans Japanese', monospace;
  color: #e6db74;
  font-size: 0.75rem;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  background-color: #2a2a2a;
`;

const StyledCode = styled.code`
  font-family: 'Source Code Pro', 'Noto Sans Japanese', monospace;
  font-size: 0.75rem;
  display: block;
  overflow: auto;
  padding: 0.5rem 0;
  color: #fff;

  /**
   * @see https://www.samclarke.com/assets/migrating-to-hugo/monokai.css
   */
  .token.comment,
  .token.blockquote,
  .token.shebang.important,
  .token.shebang {
    color: #75715e;
  }

  .token.operator,
  .token.important,
  .token.keyword,
  .token.rule,
  .token.tag,
  .token.deleted,
  .token.selector,
  .token.prolog,
  .token.title .token.punctuation {
    color: #f92672;
  }

  .token.property,
  .token.entity,
  .token.atrule,
  .token.command,
  .token.code {
    color: #66d9ef;
  }

  .token.regex,
  .token.atrule .token.property {
    color: #fd971f;
  }

  .token.pseudo-element,
  .token.id,
  .token.class,
  .token.class-name,
  .token.pseudo-class,
  .token.function,
  .token.namespace,
  .token.inserted,
  .token.symbol,
  .token.url-reference .token.variable,
  .token.attr-name {
    color: #a6e22e;
  }

  .token.string,
  .token.url,
  .token.list,
  .token.cdata,
  .token.attr-value,
  .token.attr-value a.token.url-link {
    color: #e6db74;
  }

  .token.constant,
  .token.hexcode,
  .token.builtin,
  .token.number,
  .token.boolean {
    color: #ae81ff;
  }

  .token.doctype,
  .token.punctuation,
  .token.variable,
  .token.macro.property {
    color: #f8f8f2;
  }

  .token.entity {
    cursor: help;
  }

  .token.title,
  .token.title .token.punctuation {
    font-weight: bold;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  /* YAML */
  .language-yaml .token.atrule {
    color: #f92672;
  }

  /* Bash */
  .language-bash .token.function {
    color: #f92672;
  }
`;
