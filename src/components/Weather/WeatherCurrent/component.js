import styled, { css } from 'styled-components';

export const WeatherCurrentWrapper = styled.div`
  width: 100%;
  
  ${({ theme }) => css`
    text-align: ${theme.vectors.center};
    width: ${theme.width[3]}%;
  `}
`;

export const Title = styled.h3`
  font-size: ${(props) => props.fontSize};
  padding-bottom: ${(props) => props.paddingBottom};
  
`;
