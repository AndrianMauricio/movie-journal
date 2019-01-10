import * as React from 'react';
import { MutationFn } from 'react-apollo';

import { Button, Field, Form } from '../../components';
import { useField, useIsFormValid } from '../../hooks';
import { UseFieldSetters } from '../../hooks/useField';
import useForm from '../../hooks/useForm';
import { SignUpData, SignUpVariables } from './mutations/signUp';
import validations from './validations';

export type SignUpFormProps = {
  signUp: MutationFn<SignUpData, SignUpVariables>;
};

const signUpFormConfig = [
  {
    id: "name",
    validations: validations.name,
    label: "Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    validations: validations.email,
    label: "E-Mail",
    type: "email",
    required: true,
  },
  {
    id: "password",
    validations: validations.password,
    label: "Password",
    type: "password",
    required: true,
  },
  {
    id: "repeatPassword",
    validations: validations.repeatPassword,
    label: "Repeat Password",
    type: "password",
    required: true,
  },
];

const SignUpForm: React.FunctionComponent<SignUpFormProps> = React.forwardRef<
  HTMLFormElement,
  SignUpFormProps
>(({ signUp }, ref) => {
  const [
    state,
    dispatch,
    updateValue,
    updateTouched,
    validate,
    isFormValid,
  ] = useForm(signUpFormConfig);

  const onChangeHandler = (id: string) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const value = (e.target as HTMLInputElement).value;
    dispatch(updateValue(id)(value));
  };

  const onBlurHandle = (id: string) => () => {
    if (!state[id].touched) {
      dispatch(updateTouched(id)(true));
    }
    dispatch(validate(id)(state[id].value));
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (isFormValid()) {
          signUp({
            variables: {
              email: state.email.value,
              password: state.password.value,
              name: state.name.value,
            },
          });
        }
      }}
      ref={ref}
    >
      {signUpFormConfig.map(({ id, label, type }) => (
        <Field
          key={id}
          id={id}
          label={label}
          type={type}
          errors={state[id].errors}
          touched={state[id].touched}
          value={state[id].value}
          onChange={onChangeHandler(id)}
          onBlur={onBlurHandle(id)}
        />
      ))}
      <Button disabled={!isFormValid()}>SIGN ME UP</Button>
      <Button
        onClick={() => {
          const email = `${Math.random()}@mau.com`;
          dispatch(updateValue("name")("mau"));
          dispatch(updateTouched("name")(true));
          dispatch(validate("name")("mau"));
          dispatch(updateValue("email")(email));
          dispatch(updateTouched("email")(true));
          dispatch(validate("email")(email));
          dispatch(updateValue("password")("asdf1234"));
          dispatch(updateTouched("password")(true));
          dispatch(validate("password")("asdf1234"));
          dispatch(updateValue("repeatPassword")("asdf1234"));
          dispatch(updateTouched("repeatPassword")(true));
          dispatch(validate("repeatPassword")("asdf1234"));
        }}
        type="button"
      >
        Fill Form
      </Button>
    </Form>
  );
});

export default SignUpForm;
