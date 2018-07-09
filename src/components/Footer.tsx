import React from 'react';
import styled from 'styled-components';
import Link from '~/components/Link';
import { withRouter } from 'react-static';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {}

const Footer: React.SFC<Props> = ({ location }) => (
  <FooterWrapper>
    {location.pathname !== '/' && (
      <Column>
        <StyledLink href="/">Back to TopPage</StyledLink>
      </Column>
    )}
    <Column>&copy; 3846masa</Column>
    <Column>
      <StyledLink href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja">
        <img
          src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-nd.png"
          alt="CC-BY-NC-ND"
          width="100"
        />
      </StyledLink>
    </Column>
  </FooterWrapper>
);

export default withRouter(Footer);

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #fff;
  background: linear-gradient(to right top, #37474f, #212121);
  font-size: 0.9rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
