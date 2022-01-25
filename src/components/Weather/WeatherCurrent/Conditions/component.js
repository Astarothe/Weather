import styled, { css } from 'styled-components';

export const Condition = styled.p`
  ${({ theme }) => css`
    align-items: ${theme.vectors.center};
    justify-content: ${theme.vectors.center};
    width: ${theme.width[0]}%;
    display: ${theme.display.flex};
  `}
`;

export const WrapperCondition = styled.div`
  max-width: 400px;
  
  ${({ theme }) => css`
    padding: ${theme.spaces[5]}px ${theme.spaces[0]}px;
    justify-content: ${theme.vectors.spaceEvenly};
    display: ${theme.display.flex};
  `}

`;

export const ImageCondition = styled.img`
  ${({ theme }) => css`
    padding: ${theme.spaces[0]}px ${theme.spaces[2]}px;
  `}
`;
