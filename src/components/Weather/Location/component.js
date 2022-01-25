import styled, { css } from 'styled-components';

export const Country = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;
export const City = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[2]}px;
    margin-bottom: ${theme.spaces[2]}px;
  `}
`;

export const LocationWrapper = styled.div`
  max-width: 500px;
  ${({ theme }) => css`
    padding: ${theme.spaces[5]}px ${theme.spaces[4]}px;
    justify-content: ${theme.vectors.spaceEvenly};
    display: ${theme.display.flex};
    width: ${theme.width[3]}%;
  `}
`;
