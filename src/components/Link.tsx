import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

interface Props {
  href: string;
}

const LinkWrapper: React.SFC<Props> = ({ href, ...rest }) => {
  if (/^\w+:\/\//.test(href)) {
    return <StyledExternalLink href={href} {...rest} target="_blank" rel="noopener noreferrer" />;
  }
  return <StyledLink to={href} {...rest} />;
};

export default LinkWrapper;

const StyledExternalLink = styled.a`
  word-break: break-all;
`;

const StyledLink = styled(Link)`
  word-break: break-all;
`;
