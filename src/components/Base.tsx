import React from 'react';
import styled from 'styled-components';

const Base: React.SFC<{}> = props => (
  <Wrapper>
    <Component {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;
const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Base;
