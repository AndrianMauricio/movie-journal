import { useReducer } from 'react';

import { Validation } from '../utils/createValidator';

export type State = {
  [name: string]: {
    value: string;
    errors: string[];
    touched: boolean;
    isRequired: boolean;
    validations: Validation[];
  };
};

enum Actions {
  Update = "UPDATE",
  Validate = "VALIDATE",
}

export type ActionUpdateValue = {
  type: Actions.Update;
  field: string;
  key: "value";
  value: string;
};

export type ActionUpdateTouched = {
  type: Actions.Update;
  field: string;
  key: "touched";
  value: boolean;
};

export type ActionValidate = {
  type: Actions.Validate;
  field: string;
  value: string;
};

export type UseFormReturn = [
  State,
  React.Dispatch<ActionUpdateValue | ActionValidate | ActionUpdateTouched>,
  (field: string) => (value: string) => ActionUpdateValue,
  (field: string) => (value: boolean) => ActionUpdateTouched,
  (field: string) => (value: string) => ActionValidate,
  () => boolean
];

type FieldConfig = {
  id: string;
  required: boolean;
  validations: Validation[];
  errors?: string[];
  label?: string;
  touched?: boolean;
  type?: string;
  value?: string;
};

const useForm = (fieldsConfig: FieldConfig[]): UseFormReturn => {
  const initialState = fieldsConfig.reduce(
    (
      result,
      { id, value = "", validations, required, touched = false, errors = [] }
    ) => {
      result[id] = {
        value,
        errors,
        touched,
        isRequired: required,
        validations,
      };
      return result;
    },
    <State>{}
  );

  const reducer = (
    state: State = initialState,
    action: ActionUpdateValue | ActionValidate | ActionUpdateTouched
  ) => {
    switch (action.type) {
      case Actions.Update: {
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            [action.key]: action.value,
          },
        };
      }
      case Actions.Validate: {
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            errors: state[action.field].validations.reduce(
              (errors: string[], validation: Validation) => {
                const error = validation(action.value, state);
                if (error === "") return errors;
                return [...errors, error];
              },
              []
            ),
          },
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateValue = (field: string) => (
    value: string
  ): ActionUpdateValue => ({
    type: Actions.Update,
    field,
    key: "value",
    value,
  });

  const updateTouched = (field: string) => (
    value: boolean
  ): ActionUpdateTouched => ({
    type: Actions.Update,
    field,
    key: "touched",
    value,
  });

  const isFormValid = (): boolean => {
    return Object.values(state).every(({ errors, value, isRequired }) => {
      return !isRequired || (value !== "" && errors.length < 1);
    });
  };

  const validate = (field: string) => (value: string): ActionValidate => ({
    type: Actions.Validate,
    field,
    value,
  });

  return [state, dispatch, updateValue, updateTouched, validate, isFormValid];
};

export default useForm;
