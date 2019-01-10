import * as React from 'react';

import { Validation } from '../utils/createValidator';

export type UseFieldGetters = {
  value: string;
  touched: boolean;
  errors: string[];
  isRequired: boolean;
};

export type UseFieldSetters = {
  value: (value: string) => void;
  touched: (touched: boolean) => void;
  errors: (errors: string[]) => void;
  validate: (...values: string[]) => void;
};

export type UseFieldReturn = [UseFieldGetters, UseFieldSetters];

export type UseFieldArgs = {
  required: boolean;
  initial?: string;
  validations: Validation[];
};

export const useIsFormValid = (getters: UseFieldGetters[]) => {
  return (): boolean =>
    getters.every(({ errors, value, isRequired }) => {
      return !isRequired || (value !== "" && errors.length < 1);
    });
};

const useField = ({
  required = false,
  validations = [],
  initial = "",
}: UseFieldArgs): UseFieldReturn => {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);

  const validate = (...values: string[]): void => {};
  /*setErrors(
      validations.reduce<string[]>((errors, validation) => {
        const result = validation(...values);
        return result !== "" ? [...errors, result] : errors;
      }, [])
    );*/

  return [
    {
      value: value,
      touched: touched,
      errors: errors,
      isRequired: required,
    },
    {
      value: value => setValue(value),
      touched: touched => setTouched(touched),
      errors: errors => setErrors(errors),
      validate,
    },
  ];
};

export default useField;
