import styled from '../../styled/styled-components';

export const Form = styled.form`
  display: grid;
  grid-gap: ${({ theme }) => theme.size[21]}rem 0;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.blue};
  border-radius: ${({ theme }) => theme.size[8]}rem;
  border: none;
  box-shadow: 0 ${({ theme }) => theme.size[5]}rem
    ${({ theme }) => theme.size[13]}rem 0 rgba(0, 0, 0, 0.3);
  color: white;
  display: inline-block;
  font-family: Montserrat, sans-serif;
  font-size: ${({ theme }) => theme.size[21]}rem;
  line-height: ${({ theme }) => theme.size[21]}rem;
  padding: ${({ theme }) => theme.size[2]}rem;
  transition: all 0.3s ease-in-out;
  height: ${({ theme }) => theme.size[55]}rem;

  &:disabled {
    background-color: ${({ theme }) => theme.grey5};
    box-shadow: none;
  }

  &:focus {
    background-color: ${({ theme }) => theme.lightBlue};
    box-shadow: 0 ${({ theme }) => theme.size[13]}rem
      ${({ theme }) => theme.size[13]}rem rgba(0, 0, 0, 0.1);
    margin-top: ${({ theme }) => theme.size[21]}rem;
    outline: none;
  }
`;
