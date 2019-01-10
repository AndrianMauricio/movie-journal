import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import posed, { PoseGroup } from 'react-pose';
import { RouteChildrenProps } from 'react-router';
import { NavLink, Route, Switch } from 'react-router-dom';

import { Nav } from './components';
import LogInScreen from './screens/login';
import SignUpScreen from './screens/signup';
import { GlobalStyle } from './styled';

const AnimatedRoutes = posed.div({
  preEnter: {
    opacity: 0,
    x: "-150%",
  },
  enter: {
    opacity: 1,
    x: "0%",
  },
  exit: {
    opacity: 0,
    x: "150%",
  },
});

const App = () => (
  <Query
    query={gql`
      {
        loggedIn @client
      }
    `}
  >
    {({ data = {} }) => (
      <>
        <GlobalStyle />
        <Nav>
          {data.loggedIn && (
            <NavLink exact to="/">
              Home
            </NavLink>
          )}
          {data.loggedIn && <button type="button">Log Out</button>}
          {!data.loggedIn && <NavLink to="/login">Log In</NavLink>}
          {!data.loggedIn && <NavLink to="/signup">Sign Up</NavLink>}
        </Nav>
        <Route
          render={({ location, history }) => {
            if (!data.loggedIn && location.pathname === "/") {
              history.replace("/login");
              return null;
            }
            return (
              <PoseGroup animateOnMount preEnterPose="preEnter">
                <AnimatedRoutes key={location.pathname}>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      component={(props: RouteChildrenProps) => (
                        <h1>
                          Hello:{" "}
                          {props.location.state
                            ? props.location.state.name
                            : "nobody"}
                        </h1>
                      )}
                    />
                    <Route path="/login" component={LogInScreen} />
                    <Route path="/signup" component={SignUpScreen} />
                  </Switch>
                </AnimatedRoutes>
              </PoseGroup>
            );
          }}
        />
      </>
    )}
  </Query>
);

export default App;
