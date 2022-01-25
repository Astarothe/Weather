import styled, { css } from 'styled-components';

export const WeekWeatherWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spaces[5]}px;
    text-align: ${theme.vectors.center};
  `}
`;

export const Prognosis = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spaces[4]}px ${theme.spaces[0]}px ${theme.spaces[2]}px;
    border-bottom: ${theme.border[2]}px solid ${theme.colors.white};
    text-align: ${theme.vectors.center};
  `}

  ${({ theme }) => theme.above.xs({
    fontSize: theme.fontSizes[2],
  })}
`;

export const WeatherContainer = styled.div`
  ${({ theme }) => css`
    justify-content: ${theme.vectors.spaceEvenly};
    display: ${theme.display.flex};
  `}
`;

export const WrapperItems = styled.div`
  padding: 40px 0 60px;


  ${({ theme }) => theme.above.large({
    maxWidth: '1200px',
    width: '1200px',
    margin: '60px auto',

  })}
`;
