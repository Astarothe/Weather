import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: block;

    justify-content: ${theme.vectors.spaceAround};
  `}

  ${({ theme }) => theme.above.small({
    display: theme.display.flex,
    padding: '40px 30px',
  })}
  
  max-width: 1200px;


  ${({ theme }) => theme.above.large({
    width: '1200px',
    margin: '0 auto',

  })}
  
`;

export const MainWrapper = styled.div`
  max-height: 1080px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.imageBackground};
    justify-content: ${theme.vectors.flexStart};
    flex-direction: ${theme.direction.column};
    position: ${theme.position.relative};
    display: ${theme.display.flex};
    min-height: ${theme.width[3]}vh;
  `}
  ${({ theme }) => theme.above.large({
    minHeight: 'auto',
    height: '1080px',
  })}
`;
