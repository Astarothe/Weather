import {css} from "styled-components";

export const black = '#000000'
export const white = '#ffffff'
const font = 'sans-serif'
const size = {
    xs: 550,
    small: 768,
    med: 992,
    large: 1200,
    xl: 1680,
}
const fontFamily = 'Helvetica Neue'

const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${size[label]}px) {
        ${css(...args)}
      }
    `
    return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
        ${css(...args)}
      }
    `
    return acc
}, {})

export const theme = {
    above,
    below,
    fontFamily,
    font,
    colors: {
        white,
        black,
    },
}

export const lightColors = {
    main: black,
    secondary: white,
}

export const darkColors = {
    main: white,
    secondary: black,
}
