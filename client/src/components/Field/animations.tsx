import posed from 'react-pose';

import theme from '../../styled/theme';
import { Error, Errors, Label } from './styled';

export const AnimateErrors = posed(Errors)({
  enter: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
});

export const AnimateError = posed(Error)({
  enter: {
    scale: 1,
    transformOrigin: "top right",
  },
  exit: {
    scale: 0,
    transformOrigin: "top right",
  },
});

export const AnimatedLabel = posed(Label)({
  focused: {
    y: -26,
    color: "rgba(0, 0, 0, 1)",
  },
  unfocused: {
    y: 0,
    color: theme.grey5,
  },
});
