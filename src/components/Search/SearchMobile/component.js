import styled, { css } from 'styled-components';

export const CityInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes[2]}px;
    margin-top: ${theme.spaces[2]}px;
    margin-bottom: ${theme.spaces[2]}px;
    padding: ${theme.spaces[0]}px ${theme.spaces[5]}px ${theme.spaces[0]} ${theme.spaces[3]}px;
    color: ${theme.colors.white};
    border-bottom: ${theme.border[2]}px solid transparent;
    width: ${theme.width[3]}%;
  `}
  &:focus {
    ${({ theme }) => css`
      border-bottom: ${theme.border[2]}px solid ${(props) => (props.error ? 'red' : theme.colors.white)};
    `}
  }

`;
export const LabelCityInput = styled.label`
  width: 80%;

  ${({ theme }) => css`
    position: ${theme.position.relative};
    text-align: ${theme.vectors.center};
    align-self: ${theme.vectors.center};
  `}
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    display: block;
    top: -115px;
    right: -10px;

    ${({ theme }) => css`
      background-position: ${theme.vectors.center};
      position: ${theme.position.absolute};
      border-radius: ${theme.radius[0]}px;
      background: ${theme.imageSearch};
      border:  ${theme.border[2]}px solid ${theme.colors.white};
    `}
  }
`;
