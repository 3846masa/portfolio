import React from 'react';
import { withSiteData, withRouteData, Head } from 'react-static';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import Base from '~/components/Base';
import Header from '~/components/Header';
import HeaderTitle from '~/components/HeaderTitle';
import Content from '~/components/Content';
import CardList from '~/components/CardList';
import Footer from '~/components/Footer';

interface Props {
  siteTitle: string;
  siteDescription: string;
  products: any[];
  programs: any[];
  others: any[];
}

const Home: React.SFC<Props> = ({ siteTitle, siteDescription, products, programs, others }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription.trim()} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@3846masa" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription.trim()} />
      </Head>
      <Base>
        <Header colors={{ from: '#1B5E20', to: '#66BB6A' }}>
          <HeaderTitle>3846masa's Portfolio</HeaderTitle>
        </Header>
        <IconImageWrapper>
          <IconImage
            src="https://lh3.googleusercontent.com/-NNwkAbwtSiw/VGQQfQgFYdI/AAAAAAAACXk/hta0bt4wb9MFwtaHAG9jSABKKt6n4e8kACE0YBhgL/"
            alt="3846masa"
          />
        </IconImageWrapper>
        <Content wide>
          <Section>
            <SectionHeader>Products</SectionHeader>
            <StyledCardList items={products} />
          </Section>
          <Section>
            <SectionHeader>Programs</SectionHeader>
            <StyledCardList items={programs} />
          </Section>
          <Section>
            <SectionHeader>Others</SectionHeader>
            <StyledCardList items={others} />
          </Section>
        </Content>
        <Footer />
      </Base>
    </React.Fragment>
  );
};

export default hot(module)(withSiteData(withRouteData(Home))) as typeof Home;

const IconImageWrapper = styled.div`
  position: relative;
  height: 2rem;
`;

const IconImage = styled.img`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  border: solid 1px #fff;
  border-radius: 50%;
  position: absolute;
  display: block;
  width: 4rem;
  height: 4rem;
  top: -2rem;
  left: -2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
`;

const SectionHeader = styled.h2`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledCardList = styled(CardList)`
  padding-top: 0.5rem;
`;
