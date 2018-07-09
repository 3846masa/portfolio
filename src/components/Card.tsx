import React from 'react';
import styled from 'styled-components';

import Link from '~/components/Link';
import OptimizedImage from '~/components/OptimizedImage';

interface Props {
  item: any;
}

const defaultImage =
  'https://lh3.googleusercontent.com/-cw0ectREnv0/WvXTJVaJ4NI/AAAAAAAAAGE/joCHsVWLMtw90tAEempeh8AJG8FJjc_lwCE0YBhgL/';

const Card: React.SFC<Props> = ({ item }) => {
  const cardImage = (item.thumbnail && item.thumbnail.card) || defaultImage;
  return (
    <Container href={item.path}>
      <ImageWrapper>
        <Image src={cardImage} alt={item.title} />
      </ImageWrapper>
      <Content>
        <Title>{item.title}</Title>
        {item.description && <Description>{item.description}</Description>}
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled(Link)`
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  color: inherit;
  text-decoration: none;

  transition-duration: 0.25s;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 25%;
  }
`;

const Image = styled(OptimizedImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Title = styled.strong`
  display: block;
  padding-top: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Description = styled.div`
  display: block;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: #616161;
`;
