import * as React from 'react';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import headerLogo from '../images/wildcat-bank-logo.png';

const { Header, Footer, Content } = Layout;

const HeaderContainer = styled.div`
  padding: 0 50px;
  border-bottom: 1px solid #f0f0f0;
`;

const TopContent = styled.div`
  margin: 100px 0;
`;

const SubContent = styled.div`
  background: #fef4e8;
`;

const InfoSection = styled.div`
  padding-right: 10px;
`;

const MainHeader = styled.h2`
  line-height: 1.3;
  color: #111111;
  font-size: 48px;
  font-weight: 800;
`;

const SubHeader = styled.h3`
  padding: 24px 0;
  line-height: 1.3;
  color: #111111;
  font-size: 24px;
  font-weight: 800;
`;

const SmallHeader = styled.h4`
  color: #13667f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
`;

const IndexPage = () => {
  return (
    <>
      <title>Wildcat Stable Coin - Home</title>
      <Layout>
        <Header>
          <HeaderContainer>
            <img style={{ width: '200px' }} src={headerLogo} alt="logo" />
          </HeaderContainer>
        </Header>
        <Content>
          <TopContent>
            <Row justify="center">
              <Col span={8}>
                <SmallHeader>Introducing USD WildCat Stable Coin</SmallHeader>
                <MainHeader>
                  Stable in price so you don't have to be.
                </MainHeader>
              </Col>
              <Col span={8}>Some Stuff Here</Col>
            </Row>
          </TopContent>
          <SubContent>
            <Row justify="center">
              <Col span={8}>
                <SubHeader>What is USD WildCat?</SubHeader>
                <p>
                  USD WildCat (USWC) was founded with one purpose in mind - to
                  bring stability and transparency to crypto. Each USWC is
                  backed 1:1 to the American dollar meaning anytime holders can
                  trade in their USWC for real USD.
                </p>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row
              justify="center"
              style={{ marginTop: '100px', paddingBottom: '100px' }}
            >
              <Col span={4}>
                <InfoSection>
                  <SmallHeader>Backed by US Dollars</SmallHeader>
                  <p>
                    Each USWC is backed by one US dollar, which is held in an
                    industry standard unaudited, opaque, and (at times)
                    unaccessible bank account.
                  </p>
                </InfoSection>
              </Col>
              <Col span={4}>
                <InfoSection>
                  <SmallHeader>Stable at $1</SmallHeader>
                  <p>
                    USWC is a stablecoin that avoids the typical crypto
                    volatility. As our clout grows so does our cabal of crypto
                    exchanges guaranteeing USWC stays fixed regardless of fair
                    market valuations.
                  </p>
                </InfoSection>
              </Col>
              <Col span={4}>
                <SmallHeader>Backed by US Dollars</SmallHeader>
                <p>
                  Each USWC is backed by one US dollar, which is held in an
                  industry standard unaudited, opaque, and (at times)
                  unaccessible bank account.
                </p>
              </Col>
              <Col span={4}>
                <SmallHeader>Backed by US Dollars</SmallHeader>
                <p>
                  Each USWC is backed by one US dollar, which is held in an
                  industry standard unaudited, opaque, and (at times)
                  unaccessible bank account.
                </p>
              </Col>
            </Row>
          </SubContent>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default IndexPage;
