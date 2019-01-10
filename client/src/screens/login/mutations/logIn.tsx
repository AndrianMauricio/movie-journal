import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

export type LogInData = {
  logIn: string;
};

export type LogInVariables = {
  email: string;
  password: string;
};

export default class LogInMutation extends Mutation<LogInData, LogInVariables> {
  static defaultProps = {
    mutation: gql`
      mutation LogIn($email: String!, $password: String!) {
        logIn(email: $email, password: $password)
      }
    `,
  };
}
