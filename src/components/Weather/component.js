import styled, { css } from 'styled-components';

export const WeatherMainContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  ${({ theme }) => css`
    justify-content: ${theme.vectors.flexStart};
    flex-direction: ${theme.direction.column};
    display: ${theme.display.flex};
    width: ${theme.width[3]}%;
    height: ${theme.width[3]}%;
  `}


  ${({ theme }) => theme.above.small({
    margin: 'initial',
  })}
`;

export const Image = styled.img`
  mix-blend-mode: screen;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.objectFit};
  margin: ${(props) => props.margin}

`;

export const Description = styled.p`
  text-transform: ${(props) => props.transform};
  padding: ${({ theme }) => theme.spaces[2]}px;

`;

export const Temp = styled.p`
  padding: ${({ theme }) => theme.spaces[0]}px;
  font-size: ${(props) => props.fontSize};
`;
