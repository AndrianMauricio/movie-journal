import * as React from 'react';

import styled from '../../styled/styled-components';

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.red};
  border-radius: ${({ theme }) => theme.size[8]}rem;
  color: white;
  font-weight: bold;
  padding: ${({ theme }) => theme.size[13]}rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.size[21]}rem;
`;

export type ErrorProps = {
  children?: React.ReactNode;
};

const Error: React.FunctionComponent = React.forwardRef<
  HTMLDivElement,
  ErrorProps
>(({ children }, ref) => <ErrorMessage ref={ref}>{children}</ErrorMessage>);

export default Error;
