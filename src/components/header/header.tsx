import { ReactNode } from 'react';
import styled from './header.module.css';
import { SearchInput } from '../search-input/search-input';
import { Filters } from '../filters/filters';

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
