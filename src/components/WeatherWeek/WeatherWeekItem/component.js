import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${(props) => props.fontSize};
  padding-bottom: ${(props) => props.paddingBottom};

  ${({ theme }) => theme.above.xs({
    fontSize: theme.fontSizes[1],
  })}
`;

export const Temp = styled.p`
  padding: ${({ theme }) => theme.spaces[0]}px;
  font-size: ${(props) => props.fontSize};

  ${({ theme }) => theme.above.xs({
    fontSize: theme.fontSizes[1],
  })}
`;

export const Image = styled.img`
  mix-blend-mode: screen;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.objectFit};
  margin: ${(props) => props.margin};

  ${({ theme }) => theme.above.xs({
    width: '70px',
  })}
`;
