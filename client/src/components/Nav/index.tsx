import styled from '../../styled/styled-components';

const Nav = styled.nav`
  align-items: center;
  background-color: rgba(33, 150, 243, 1);
  display: flex;
  height: ${({ theme }) => theme.size[55]}rem;
  justify-content: space-around;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;

  a,
  button {
    background-color: transparent;
    border: none;
    color: white;
    display: block;
    font-family: Montserrat, sans-serif;
    font-size: ${({ theme }) => theme.size[13]}rem;
    padding: ${({ theme }) => theme.size[5]}rem
      ${({ theme }) => theme.size[8]}rem;

    &::after {
      content: " ";
      background-color: white;
      display: block;
      height: ${({ theme }) => theme.size[2]}rem;
      left: -10%;
      margin-top: ${({ theme }) => theme.size[5]}rem;
      position: relative;
      transform: scale(0, 1);
      transition: transform 0.3s ease-out;
      width: 120%;
    }

    &.active {
      pointer-events: none;
      &::after {
        transform: scale(1, 1);
      }
    }
  }
`;

export default Nav;
