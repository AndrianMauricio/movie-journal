import * as React from 'react';
import { Link } from 'react-router-dom';

import { Success } from '../../components/Success';

interface SignUpSuccessfulProps {
  email: string;
}

const SignUpSuccessful: React.FunctionComponent<
  SignUpSuccessfulProps
> = React.forwardRef<HTMLDivElement, SignUpSuccessfulProps>(
  ({ email }, ref) => {
    return (
      <Success ref={ref}>
        <h1>SIGN UP SUCCESSFUL!</h1>
        <p>
          <Link
            to={{
              pathname: "/login",
              state: { email: email, from: "/signup" },
            }}
          >
            Log In here
          </Link>{" "}
          to start using Movie Journal!
        </p>
      </Success>
    );
  }
);

export default SignUpSuccessful;
