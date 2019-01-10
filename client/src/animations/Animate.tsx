import posed from 'react-pose';

const Animate = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 25, opacity: 0 },
});

export default Animate;
