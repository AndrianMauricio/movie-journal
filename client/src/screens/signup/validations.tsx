import {
    hasAtLeastOneAlphabeticCharacter, hasAtLeastOneNumericCharacter, hasMaxLength, hasMinLength,
    isEmail, isEqualTo, isRequired, Validation
} from '../../utils/createValidator';

const validations = {
  name: [isRequired, hasMinLength(3), hasMaxLength(255)],
  email: [isRequired, isEmail],
  password: [
    isRequired,
    hasMinLength(8),
    hasAtLeastOneAlphabeticCharacter,
    hasAtLeastOneNumericCharacter,
  ],
  repeatPassword: [isRequired, isEqualTo("Password", "password")],
};

export default validations;
