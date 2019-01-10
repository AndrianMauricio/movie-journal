import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';

import { Animate } from '../../animations';
import { AnimateSpinner, Error, Spinner } from '../../components';
import SignUpMutation from './mutations/signUp';
import SignUpForm from './SignUpForm';
import SignUpSuccessful from './SignUpSuccessful';

const SignUpScreen: React.FunctionComponent = () => (
  <>
    <h1>Sign Up</h1>
    <SignUpMutation>
      {(signUp, { data, loading, error }) => (
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
            <Animate key="success">
              <SignUpSuccessful email={data.signUp} />
            </Animate>
          )}
          {!data && (
            <Animate key="form">
              <SignUpForm signUp={signUp} />
            </Animate>
          )}
        </PoseGroup>
      )}
    </SignUpMutation>
  </>
);

export default SignUpScreen;
