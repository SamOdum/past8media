import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Youwai is a business developer particularly interested in helping emerging brands
                and start-ups identify opportunities and resources to help them plan, start and grow
                their businesses profitably.
              </p>
              <p>
                A social entrepreneur, passionate about the internet as well as creating
                transformative business solutions and information products diversified into business
                plan development, social media marketing, and feasibility studies. She also offers
                web-development, digital and social media marketing, as well as affiliate marketing.
              </p>
              <p>
                In addition to coaching, workshops and training programs for individuals and groups,
                she also writes unique and inspiring articles as well as share insightful tips on
                business and technology. She strives to give only needed value and will be pleased
                to provide a step by step guide through your business journey.
              </p>
              <p>
                In summary, Youwai is an internet marketer, internet business consultant, author,
                and coach. She is also a trainer, social entrepreneur, affiliate marketer, wife, and
                mother.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
