import React from 'react';
import { Router } from 'react-static';
import { injectGlobal as css } from 'styled-components';

import AnimatedRoutes from '~/components/AnimatedRoutes';

css`
  html,
  body {
    font-family: Lato, 'Noto Sans JP', -apple-system, blinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Yu Gothic Medium', YuGothic, Meiryo, sans-serif;
    font-size: 16px;
    color: #212121;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }

  * {
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
`;

const App: React.SFC<{}> = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;
