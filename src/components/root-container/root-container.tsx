import { ReactNode } from 'react';
import styled from './root-container.module.css';

type RootContainerType = {
  children: ReactNode | JSX.Element;
};

export const RootContainer = ({ children }: RootContainerType) => {
  return <div className={styled.root}>{children}</div>;
};
