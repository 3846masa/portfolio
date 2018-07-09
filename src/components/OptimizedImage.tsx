import React from 'react';
import styled from 'styled-components';

interface ImgSrc {
  webp?: string;
  raw: string;
}
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}
interface State {
  imgUrl: ImgSrc;
  lqipUrl?: ImgSrc;
  naturalWidth?: number;
  naturalHeight?: number;
  isLoaded: boolean;
}

class OptimizedImage extends React.PureComponent<Props, State> {
  imgRef = React.createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    const state: State = {
      imgUrl: {
        raw: props.src || '',
      },
      isLoaded: false,
    };
    if (/lh3\.googleusercontent\.com/.test(state.imgUrl.raw)) {
      const parsed = state.imgUrl.raw.split('/').slice(0, 7);
      state.imgUrl = {
        raw: [...parsed, `w${props.width || 720}`, ''].join('/'),
        webp: [...parsed, `w${props.width || 720}-rw`, ''].join('/'),
      };
      state.lqipUrl = {
        raw: [...parsed, 's50-fSoften=1,30,0', ''].join('/'),
        webp: [...parsed, 's50-rw-fSoften=1,30,0', ''].join('/'),
      };
    }
    this.state = state;
  }

  componentDidMount() {
    const img = this.imgRef.current!;
    if (!img.complete) {
      this.setState({
        isLoaded: true,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      });
    }
  }

  handleLoaded = () => {
    const img = this.imgRef.current!;
    this.setState({
      isLoaded: true,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    });
  };

  render() {
    const { src, width, height, className, ...rest } = this.props;
    const { imgUrl, lqipUrl, isLoaded, naturalWidth, naturalHeight } = this.state;

    return (
      <div className={className}>
        <Wrapper width={(width as number) || naturalWidth} height={(height as number) || naturalHeight}>
          {lqipUrl && <Picture visible source={lqipUrl} {...rest} />}
          <Picture
            visible={isLoaded}
            source={imgUrl}
            innerRef={this.imgRef as any}
            onLoad={this.handleLoaded}
            {...rest}
          />
        </Wrapper>
      </div>
    );
  }
}

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  source: ImgSrc;
  visible: boolean;
  innerRef?: React.Ref<any>;
}
const Picture: React.SFC<PictureProps> = ({ source, visible, innerRef, ...rest }) => (
  <picture>
    {source.webp && <source srcSet={source.webp} type="image/webp" />}
    <StyledImage visible={visible} innerRef={innerRef as any} src={source.raw} {...rest} />
  </picture>
);

export default OptimizedImage;

interface WrapperProps {
  width?: number;
  height?: number;
}
const Wrapper = styled<WrapperProps, 'div'>('div')`
  position: relative;
  box-sizing: content-box;
  margin: auto;
  max-width: 100%;
  overflow: hidden;
  ${({ width }) => (width ? `width: ${width}px` : '')};
  &:before {
    content: '';
    display: block;
    ${({ width, height }) => (width && height ? `padding-top: ${(height / width) * 100}%` : '')};
  }
`;

interface StyledImageProps {
  visible: boolean;
}
const StyledImage = styled<StyledImageProps, 'img'>('img')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
`;
