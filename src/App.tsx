import React from 'react';
import { Router } from 'react-static';
import { injectGlobal as css } from 'styled-components';

import AnimatedRoutes from '~/components/AnimatedRoutes';

css`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900');
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:500,700&subset=latin-ext');
  @import url('https://fonts.googleapis.com/earlyaccess/notosansjapanese.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');

  html,
  body {
    font-family: Lato, 'Noto Sans Japanese', -apple-system, blinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Yu Gothic Medium', YuGothic, Meiryo, sans-serif;
    font-size: 16px;
    color: #212121;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

const App: React.SFC<{}> = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;
