import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { createGlobalStyle } from 'styled-components';

import SEO from '@view/components/seo';
import GallerySection from '@template/GallerySection';
import BioSection from '@template/BioSection';
import '@view/backup/Scss/fullpage.scss';

const UniquePageWrap = createGlobalStyle`
  body[class*="fp-viewing"] .tl-wrapper {
    height: 100vh;
    overflow-y: hidden;
  }
`;

const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
};

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReactFullpage
      debug={process.env.NODE_ENV !== 'production'}
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      navigation
      navigationPosition="pagei-sideNav-style1"
      navigationTooltips={[
        'Output',
        'About me',
        'Philosophy',
        'Contact',
        'Instagram',
      ]}
      dragAndMove
      scrollOverflow
      pluginWrapper={pluginWrapper}
      render={({ state, fullpageApi }: any) => {
        return (
          <>
            <UniquePageWrap />
            <ReactFullpage.Wrapper>
              <GallerySection />
              <BioSection />
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  </>
);

export default IndexPage;
