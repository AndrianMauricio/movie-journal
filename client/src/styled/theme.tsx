export type ThemeType = {
  blue: string;
  lightBlue: string;
  green: string;
  grey3: string;
  grey4: string;
  grey5: string;
  red: string;
  errorsZ: number;
  size: {
    1: number;
    2: number;
    3: number;
    5: number;
    8: number;
    13: number;
    21: number;
    34: number;
    55: number;
    91: number;
  };
};

const theme: ThemeType = {
  blue: "rgba(33, 150, 243, 1)",
  lightBlue: "rgba(79, 195, 247, 1)",
  green: "rgba(76, 175, 80, 1)",
  grey3: "rgba(189, 189, 189, 1)",
  grey4: "rgba(189, 189, 189, 1)",
  grey5: "rgba(158, 158, 158, 1)",
  red: "rgba(244, 67, 54, 1)",
  errorsZ: 100,
  size: {
    1: 0.1,
    2: 0.2,
    3: 0.3,
    5: 0.5,
    8: 0.8,
    13: 1.3,
    21: 2.1,
    34: 3.4,
    55: 5.5,
    91: 9.1,
  },
};

export default theme;
