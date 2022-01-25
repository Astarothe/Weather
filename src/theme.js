import { css } from 'styled-components';
import image from './assets/image/287142.jpg';
import search from './assets/image/search.svg';

export const black = '#000000';
export const white = '#ffffff';

const font = 'sans-serif';
const fontFamily = 'Helvetica Neue';

const shadowBackground = 'rgb(0, 0, 0, 0.5)';
const imageBackground = `linear-gradient(105deg, rgba(0,0,0,.5) 56%, rgba(51,56,57,1) 100%) center center no-repeat,url(${image}) center top no-repeat`;
const imageSearch = `url(${search}) center no-repeat`;

const fontSizes = [10, 16, 20, 24, 50];
const spaces = [0, 5, 10, 15, 20, 30, 60];
const width = [25, 40, 80, 100];
const radius = [10];
const border = [1, 2, 3];

const vectors = {
  left: 'left',
  center: 'center',
  right: 'right',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
  flexStart: 'flex-start',
};

const direction = {
  column: 'column',
  row: 'row',
};

const position = {
  absolute: 'absolute',
  relative: 'relative',
};

const display = {
  flex: 'flex',
  block: 'block',
};

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
  xl: 1680,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${size[label]}px) {
        ${css(...args)}
      }
    `;
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
        ${css(...args)}
      }
    `;
  return acc;
}, {});

export const theme = {
  above,
  below,
  fontFamily,
  font,
  fontSizes,
  spaces,
  vectors,
  direction,
  position,
  shadowBackground,
  imageBackground,
  imageSearch,
  radius,
  border,
  display,
  width,
  colors: {
    white,
    black,
  },
};

export const lightColors = {
  main: black,
  secondary: white,
};

export const darkColors = {
  main: white,
  secondary: black,
};
