import React from 'react';
import unified from 'unified';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';

import Link from '~/components/Link';
import Iframe from '~/components/styled/Iframe';
import Code from '~/components/styled/Code';
import OptimizedImage from '~/components/OptimizedImage';

const processor = unified()
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: styled(Link)`
        color: #0d47a1;
        text-decoration: none;
        border-bottom: 1px solid #0d47a1;
        transition-duration: 0.25s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        &:hover {
          opacity: 0.75;
        }
      `,
      div: styled.div`
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      `,
      img: styled(OptimizedImage)`
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      `,
      iframe: styled(Iframe)`
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      `,
      code: Code,
      pre: styled.pre`
        padding: 0 1rem;
        margin: 0;
        border-radius: 3px;
        background-color: #2a2a2a;
      `,
      h2: styled.h2`
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.25rem;
      `,
      p: styled.p`
        margin: 0;
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
      `,
      ul: styled.ul`
        margin: 0;
        list-style-type: none;
        padding-left: 1.5rem;
      `,
      li: styled.li`
        position: relative;
        padding-top: 0.125rem;
        padding-bottom: 0.125rem;
        & > p {
          padding: 0;
        }
        &:before {
          content: '\u2022';
          display: inline-block;
          position: absolute;
          left: -1.5rem;
          width: 1.5rem;
          text-align: center;
        }
      `,
    },
  })
  .freeze();

interface Props {
  hast: any;
}

const HastContent: React.SFC<Props> = ({ hast }) => <Base>{processor.stringify(hast)}</Base>;

export default HastContent;

const Base = styled.div`
  width: 100%;
  line-height: 1.5;
`;
