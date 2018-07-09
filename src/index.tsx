import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/App';
export default App;

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Comp: React.ComponentType) => {
    renderMethod(<Comp />, document.getElementById('root'));
  };
  render(App);
}
