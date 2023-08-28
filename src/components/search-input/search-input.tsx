import { ICONS } from 'constants/icons';

import styled from './search-input.module.css';
import { useSearchInput } from './search-input.state';

export const SearchInput = () => {
  const { onInputChange, value, onClickSearchButton } = useSearchInput();

  return (
    <div className={styled.root}>
      <div className={styled.container}>
        <input onChange={onInputChange} value={value} type="text" className={styled.input} />
        <img className={styled.img} onClick={onClickSearchButton} src={ICONS.SearchIcon} alt="search" />
      </div>
    </div>
  );
};
