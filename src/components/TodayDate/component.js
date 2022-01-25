import styled, { css } from 'styled-components';

export const TodayDateWrapper = styled.div`

  ${({ theme }) => css`
    align-items: ${theme.vectors.center};
    flex-direction: ${theme.direction.column};
    padding: ${theme.spaces[6]}px ${theme.spaces[0]} ${theme.spaces[0]};
    display: ${theme.display.flex};
  `}

  ${({ theme }) => theme.above.small({
    maxWidth: '350px',
  })}
`;
