import styled from '../../styled/styled-components';

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &.focused {
    & > label {
    }
    & > input {
    }
    & > .errors {
    }
  }
`;

export const Label = styled.label`
  background-color: white;
  font-size: ${({ theme }) => theme.size[13]}rem;
  left: ${({ theme }) => theme.size[13]}rem;
  line-height: ${({ theme }) => theme.size[13]}rem;
  padding: 0 ${({ theme }) => theme.size[5]}rem;
  position: absolute;
  text-align: center;
  top: ${({ theme }) => theme.size[21]}rem;
  transform-origin: left center;
`;

export const InputIcon = styled.span`
  color: ${({ theme }) => theme.grey4};
  position: absolute;
  right: ${({ theme }) => theme.size[13]}rem;
  top: 1.6rem;
`;

export const Input = styled.input`
  border-color: ${({ theme }) => theme.grey4};
  border-radius: ${({ theme }) => theme.size[8]}rem;
  border-style: solid;
  border-width: ${({ theme }) => theme.size[2]}rem;
  color: black;
  font-family: Montserrat, sans-serif;
  font-size: ${({ theme }) => theme.size[13]}rem;
  height: ${({ theme }) => theme.size[55]}rem;
  line-height: ${({ theme }) => theme.size[13]}rem;
  padding: ${({ theme }) => theme.size[13]}rem;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.blue};
    outline: none;
    border-width: ${({ theme }) => theme.size[2]}rem;

    &.withError,
    &.correct {
      border-color: ${({ theme }) => theme.blue};
    }
  }

  &:disabled {
    background-color: white;
  }

  &.withError {
    border-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.red};
  }

  &.correct {
    border-color: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
  }
`;

export const Errors = styled.div`
  padding: ${({ theme }) => theme.size[5]}rem 0;
  transform-origin: top right;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.size[13]}rem;
  text-align: right;
  transform-origin: center right;
`;
