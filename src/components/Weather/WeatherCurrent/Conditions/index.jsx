import React, { useSelector } from 'react-redux';
import { Condition, ImageCondition, WrapperCondition } from './component';
import { weatherConditions } from '../../../../selectors';

export function Conditions() {
  const conditions = useSelector(weatherConditions);
  const arrCondition = conditions.map(({ img, title }) => (
    <Condition key={title}>
      <ImageCondition src={img} alt={title} />
      {title}
    </Condition>
  ));

  return (
    <WrapperCondition>
      {arrCondition}
    </WrapperCondition>
  );
}
