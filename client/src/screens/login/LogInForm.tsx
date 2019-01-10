import * as React from 'react';
import { MutationFn } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';

import { Button, Field, Form } from '../../components';
import { useField } from '../../hooks';
import { UseFieldGetters, UseFieldSetters } from '../../hooks/useField';
import useForm from '../../hooks/useForm';
import { hasMinLength, isEmail, isRequired } from '../../utils/createValidator';
import { LogInData, LogInVariables } from './mutations/logIn';

type LogInFormProps = {
  logIn: MutationFn<LogInData, LogInVariables>;
};

const LogInForm: React.FunctionComponent<
  RouteChildrenProps & LogInFormProps
> = ({ location, logIn }) => {
  const fromSignUp = location.state && location.state.from === "/signup";
  const email = location.state ? location.state.email : "";
  const touched = email !== "";

  const [
    state,
    dispatch,
    updateValue,
    updateTouched,
    validate,
    isFormValid,
  ] = useForm([
    {
      id: "email",
      label: "E-Mail",
      type: "email",
      value: email,
      touched,
      required: true,
      validations: [isRequired, isEmail],
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      required: true,
      validations: [isRequired, hasMinLength(8)],
    },
  ]);

  const onChangeHandler = (id: string) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const value: string = (e.target as HTMLInputElement).value;
    dispatch(updateValue(id)(value));
  };

  const onBlurHandle = (id: string) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const value: string = (e.target as HTMLInputElement).value;
    if (state[id].touched) {
      dispatch(updateTouched(id)(true));
    }
    dispatch(validate(id)(value));
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (isFormValid()) {
          logIn({
            variables: {
              email: state.email.value,
              password: state.password.value,
            },
          });
        }
      }}
    >
      <Field
        key="email"
        id="email"
        label="EMail"
        type="email"
        errors={state.email.errors}
        touched={state.email.touched}
        value={state.email.value}
        onChange={onChangeHandler("email")}
        onBlur={onBlurHandle("email")}
        disabled={email !== "" && fromSignUp}
      />
      <Field
        key="password"
        id="password"
        label="Password"
        type="password"
        errors={state.password.errors}
        touched={state.password.touched}
        value={state.password.value}
        onChange={onChangeHandler("password")}
        onBlur={onBlurHandle("password")}
      />
      <Button disabled={!isFormValid()}>LOG IN</Button>
    </Form>
  );
};

export default LogInForm;
