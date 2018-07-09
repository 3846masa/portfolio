import React from 'react';
import { Route } from 'react-static';
import _Routes from 'react-static-routes';
import { TransitionGroup, Transition } from 'react-transition-group';
import { withContext, getContext } from 'recompose';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Routes = _Routes as React.ComponentType<any>;

const RenderRoutes = getContext({
  router: PropTypes.object,
})(({ getComponentForPath, router }: any) => (
  <Route
    path="*"
    render={props => {
      const Comp = getComponentForPath(props.location.pathname) || getComponentForPath('404')!;
      const PreservedRouterContext = withContext(
        {
          router: PropTypes.object,
        },
        () => ({ router })
      )((props: any) => <StyledTransition {...props} />) as React.ComponentType<any>;

      return (
        <TransitionGroup style={{ width: '100%' }}>
          <Transition key={props.location.key} mountOnEnter unmountOnExit timeout={600}>
            {(state: string) => (
              <PreservedRouterContext state={state}>
                <Comp {...props} />
              </PreservedRouterContext>
            )}
          </Transition>
        </TransitionGroup>
      );
    }}
  />
));

interface StyledTransitionProps {
  state: string;
}
const StyledTransition = styled<StyledTransitionProps, 'div'>('div')`
  position: relative;
  transition-property: opacity;
  transition-delay: ${({ state }) => (state === 'entering' || state === 'entered' ? '0.2s' : 0)};
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
`;

const AnimatedRoutes: React.SFC<{}> = () => <Routes component={RenderRoutes} />;

export default AnimatedRoutes;
