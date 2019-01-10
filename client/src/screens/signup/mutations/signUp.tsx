import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

export type SignUpData = {
  signUp: string;
};

export type SignUpVariables = {
  email: string;
  password: string;
  name: string;
};

export default class SignUpMutation extends Mutation<
  SignUpData,
  SignUpVariables
> {
  static defaultProps = {
    mutation: gql`
      mutation SignUp($email: String!, $password: String!, $name: String!) {
        signUp(email: $email, password: $password, name: $name)
      }
    `,
  };
}
