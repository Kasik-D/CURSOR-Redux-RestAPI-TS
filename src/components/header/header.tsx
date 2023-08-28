import { ReactNode } from 'react';

import { Filters } from '../filters/filters';
import { SearchInput } from '../search-input/search-input';
import styled from './header.module.css';

type HeaderContainerType = {
  children?: ReactNode | JSX.Element;
};

export const Header = ({ children }: HeaderContainerType) => {
  return (
    <div className={styled.root}>
      <SearchInput />
      <Filters />
      {children}
    </div>
  );
};
