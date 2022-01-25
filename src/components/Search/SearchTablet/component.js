import styled from 'styled-components';
import { CityInput, LabelCityInput } from '../SearchMobile/component';

export const LabelCityTablet = styled(LabelCityInput)`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;

  &::after {
    top: 12px;
    left: 92px;
    border: none;
  }
`;

export const InputCityTablet = styled(CityInput)`
  border-bottom: 3px solid ${(props) => (props.error ? 'red' : 'white')};
  width: 250px;
  padding: 10px 35px;


`;
