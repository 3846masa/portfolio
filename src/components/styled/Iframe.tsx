import React from 'react';
import styled from 'styled-components';

type StyleType = 'wide' | 'contain' | 'align-right';
type AspectType = '16:9' | '4:3' | 'none';

interface Props extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  'data-style'?: StyleType;
  'data-aspect'?: AspectType;
  height?: number;
}

const Iframe: React.SFC<Props> = ({
  'data-style': styleType,
  'data-aspect': aspect,
  height,
  className,
  src = '',
  ...props
}) => {
  if (/youtube\.com\/embed\//.test(src)) {
    src = [src.split('?')[0], 'rel=0'].join('?');
  }

  return (
    <div className={className}>
      <Wrapper styleType={styleType} aspect={aspect} height={height}>
        <StyledIframe frameBorder="0" src={src} {...props} />
      </Wrapper>
    </div>
  );
};

Iframe.defaultProps = {
  'data-style': 'contain',
  'data-aspect': '16:9',
  height: 300,
};

export default Iframe;

interface WrapperOptions {
  styleType?: StyleType;
  aspect?: AspectType;
  height?: number;
}

const Wrapper = styled<WrapperOptions, 'div'>('div')`
  position: relative;
  width: ${({ styleType }) => {
    switch (styleType) {
      case 'wide':
        return '1024px';
      default:
        return '100%';
    }
  }};
  max-width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: ${({ aspect, height }) => {
      switch (aspect) {
        case '16:9':
          return '56.25%';
        case '4:3':
          return '75%';
        default:
          return `${height}px`;
      }
    }};
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
