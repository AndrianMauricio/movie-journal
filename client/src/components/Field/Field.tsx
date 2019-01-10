import * as React from 'react';
import { PoseGroup } from 'react-pose';

import { IconLock } from '../../icons';
import { AnimatedLabel, AnimateError, AnimateErrors } from './animations';
import { Input, InputIcon, StyledField } from './styled';

export type FieldProps = {
  errors: string[];
  id: string;
  label: string;
  value: string;
  type: string;
  disabled?: boolean;
  touched?: boolean;
  readOnly?: boolean;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Field: React.FunctionComponent<FieldProps> = ({
  errors,
  id,
  label,
  touched,
  onBlur,
  onChange,
  value,
  disabled,
  ...props
}) => {
  const [focus, setFocus] = React.useState(false);

  return (
    <StyledField className={focus ? "focused" : "unfocused"}>
      <AnimatedLabel
        pose={focus || value !== "" ? "focused" : "unfocused"}
        htmlFor={id}
      >
        {label}
      </AnimatedLabel>
      {disabled && (
        <InputIcon>
          <IconLock />
        </InputIcon>
      )}
      <Input
        className={
          errors.length > 0 ? "withError" : touched ? "correct" : undefined
        }
        value={value}
        name={id}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={e => {
          setFocus(false);
          onBlur && onBlur(e);
        }}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <PoseGroup animateOnMount={true}>
        {errors.length > 0 && (
          <AnimateErrors key="errors" className="errors">
            <PoseGroup animateOnMount={true}>
              {errors.map(error => (
                <AnimateError key={error}>{error}</AnimateError>
              ))}
            </PoseGroup>
          </AnimateErrors>
        )}
      </PoseGroup>
    </StyledField>
  );
};

export default Field;
