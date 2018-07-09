import React from 'react';
import { Head, withSiteData, withRouteData } from 'react-static';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import Base from '~/components/Base';
import Header from '~/components/Header';
import HeaderTitle from '~/components/HeaderTitle';
import Content from '~/components/Content';
import HastContent from '~/components/HastContent';
import Footer from '~/components/Footer';
import formatDate from '~/utils/formatDate';

interface Props {
  siteTitle: string;
  hast: any;
  frontmatter: Record<string, any>;
}

const Markdown: React.SFC<Props> = ({ siteTitle, hast, frontmatter }) => {
  let headerColors;
  if (frontmatter.header && frontmatter.header.colors && Array.isArray(frontmatter.header.colors)) {
    const colors = frontmatter.header.colors;
    headerColors = { from: colors[0], to: colors[1] };
  }

  return (
    <React.Fragment>
      <Head>
        <title>{`${frontmatter.title} | ${siteTitle}`}</title>
        <meta name="description" content={frontmatter.description.trim()} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@3846masa" />
        <meta name="twitter:title" content={`${frontmatter.title} | ${siteTitle}`} />
        <meta name="twitter:description" content={frontmatter.description.trim()} />
      </Head>
      <Base>
        <Header colors={headerColors}>
          <HeaderTitle>{frontmatter.title}</HeaderTitle>
          <DateText>{formatDate(new Date(frontmatter.published))}</DateText>
          <TagList>{frontmatter.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}</TagList>
        </Header>
        <Content>
          <HastContent hast={hast} />
        </Content>
        <Footer />
      </Base>
    </React.Fragment>
  );
};

export default hot(module)(withSiteData(withRouteData(Markdown))) as typeof Markdown;

const DateText = styled.time`
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: #eeeeee;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: #fff;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  border: solid 1px #fff;
  border-radius: 1rem;
  &:before {
    content: '#';
    padding-right: 0.25rem;
  }
`;
