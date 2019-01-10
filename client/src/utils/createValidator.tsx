import { State } from '../hooks/useForm';

export type Validation = {
  (value: string, allValues: State): string;
};

export type Validator = {
  (fieldId: string): Validation;
};

export type ValidationMap = {
  [name: string]: Validation[];
};

export const createValidationMap = (validationMap: ValidationMap) => (
  fieldId: string
) => (value: string, state: State): string => {
  let errorMessage: string = "";

  validationMap[fieldId].every(
    (validation: Validation): boolean => {
      errorMessage = validation(value, state);

      return errorMessage === "";
    }
  );

  return errorMessage;
};

export const isRequired: Validation = value =>
  typeof value === "undefined" || value === "" ? "This field is required." : "";

export const hasMinLength = (min: number): Validation => value =>
  value.length < min
    ? `This field should have at least ${min} characters.`
    : "";

export const hasMaxLength = (max: number): Validation => value =>
  value.length > max ? `This field should have at most ${max} characters.` : "";

export const isEmail: Validation = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? ""
    : "This field has to be an email.";

export const hasAtLeastOneAlphabeticCharacter: Validation = value =>
  /(?=.*[A-Za-z])[A-Za-z\d]/.test(value)
    ? ""
    : "This field must have at least one alphabetical character.";

export const hasAtLeastOneNumericCharacter: Validation = value =>
  /(?=.*\d)[A-Za-z\d]/.test(value)
    ? ""
    : "This field must have at least one numeric character.";

export const isEqualTo = (fieldName: string, fieldId: string): Validation => (
  value,
  state
) =>
  value === state[fieldId].value
    ? ""
    : `This field must be equal to ${fieldName} field.`;
