import React, { useSelector } from 'react-redux';
import { useWindowDimensions } from '../../castom/useWindowDimensions';
import { SearchMobile } from './SearchMobile';
import { SearchTablet } from './SearchTablet';
import { loadingLoad } from '../../selectors';

export function Search() {
  const { width } = useWindowDimensions();
  const error = useSelector(loadingLoad);
  const search = width < 768 ? <SearchMobile error={error} /> : <SearchTablet error={error} />;
  return (
    <div>
      {search}
    </div>
  );
}
