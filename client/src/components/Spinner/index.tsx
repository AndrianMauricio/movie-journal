import * as React from 'react';
import posed from 'react-pose';

import styled from '../../styled/styled-components';

const StyledSpinner = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: -${({ theme }) => theme.size[21]}rem;
  position: fixed;
  top: -${({ theme }) => theme.size[55]}rem;
  width: 100vw;
  z-index: 9900;

  > .message {
    margin-bottom: ${({ theme }) => theme.size[2]}rem;
    font-size: ${({ theme }) => theme.size[21]}rem;
  }

  .spinner {
    margin: ${({ theme }) => theme.size[21]}rem auto 0;
    width: 7rem;
    text-align: center;

    > div {
      width: 1.8rem;
      height: 1.8rem;
      background-color: ${({ theme }) => theme.blue};

      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

type SpinnerProps = {
  children: React.ReactNode;
};

const Spinner: React.FunctionComponent<SpinnerProps> = React.forwardRef<
  HTMLDivElement,
  SpinnerProps
>(({ children }, ref) => (
  <StyledSpinner ref={ref}>
    <span className="message">{children}</span>
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </StyledSpinner>
));

export const AnimateSpinner = posed(Spinner)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

export default Spinner;
