import styled from 'styled-components';

interface Props {
  wide?: boolean;
}

const Content = styled<Props, 'div'>('div')`
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: ${({ wide }) => (wide ? '1024px' : '720px')};
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default Content;
