import gql from 'graphql-tag';
import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { PoseGroup } from 'react-pose';
import { RouteChildrenProps } from 'react-router';

import { Animate } from '../../animations';
import { AnimateSpinner, Error, Spinner } from '../../components';
import LogInForm from './LogInForm';
import LogInMutation from './mutations/logIn';

const LogInScreen: React.FunctionComponent<RouteChildrenProps> = props => (
  <>
    <h1>Log In</h1>
    <LogInMutation>
      {(logIn, { data, loading, error }) => (
        <PoseGroup>
          {loading && (
            <AnimateSpinner key="loading">Creating user...</AnimateSpinner>
          )}
          {error && (
            <Animate key="error">
              <Error>{error.message}</Error>
            </Animate>
          )}
          {data && (
            <Animate key="redirect">
              <ApolloConsumer>
                {client => {
                  client.writeData({ data: { loggedIn: true } });
                  props.history.replace("/", { name: data.logIn });
                  return null;
                }}
              </ApolloConsumer>
            </Animate>
          )}
          {!data && (
            <Animate key="form">
              <LogInForm logIn={logIn} {...props} />
            </Animate>
          )}
        </PoseGroup>
      )}
    </LogInMutation>
  </>
);

export default LogInScreen;
