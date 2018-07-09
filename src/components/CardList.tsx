import React from 'react';
import styled from 'styled-components';

import Card from '~/components/Card';

interface Props {
  items: any[];
  className?: string;
}

const CardList: React.SFC<Props> = ({ items, className }) => (
  <Base className={className}>{items.map(item => <Card key={item.path} item={item} />)}</Base>
);

export default CardList;

const Base = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
`;
