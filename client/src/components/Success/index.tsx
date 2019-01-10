import styled from '../../styled/styled-components';

export const Success = styled.div`
  background-color: ${({ theme }) => theme.green};
  border-radius: ${({ theme }) => theme.size[8]}rem;
  color: white;
  padding: 0 ${({ theme }) => theme.size[21]}rem
    ${({ theme }) => theme.size[13]}rem;
  text-align: center;

  a {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: ${({ theme }) => theme.size[3]}rem;
    box-shadow: 0 ${({ theme }) => theme.size[2]}rem
      ${({ theme }) => theme.size[5]}rem rgba(0, 0, 0, 0.1);
    color: white;
    padding: ${({ theme }) => theme.size[3]}rem
      ${({ theme }) => theme.size[5]}rem;
  }
`;
