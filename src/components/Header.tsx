import React from 'react';
import styled from 'styled-components';

interface Props {
  colors?: { from: string; to: string };
}

const Header: React.SFC<Props> = ({ children, colors }) => (
  <Wrapper colors={colors!}>
    <Container>{children}</Container>
  </Wrapper>
);

Header.defaultProps = {
  colors: {
    from: '#263238',
    to: '#607D8B',
  },
};

export default Header;

type WrapperProps = Required<Props>;
const Wrapper = styled<WrapperProps, 'header'>('header')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20vh;
  padding: 2rem 0;
  color: #fff;
  background: linear-gradient(to right top, ${({ colors }) => colors.from}, ${({ colors }) => colors.to});
`;

const Container = styled.div`
  margin: auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 740px;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
