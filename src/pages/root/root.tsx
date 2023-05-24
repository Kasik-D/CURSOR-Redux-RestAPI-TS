import { Loader } from '@/components/loader/loader';
import { Header } from 'components/header/header';
import { RootContainer } from 'components/root-container/root-container';

import { Outlet } from 'react-router-dom';
import { useRootState } from './root.state';

import styled from './root.module.css';

export const Root = () => {
  const { isLoading } = useRootState();

  if (isLoading) {
    return (
      <div className={styled.root}>
        <Loader />
      </div>
    );
  }

  return (
    <RootContainer>
      <Header />
      <div className={styled.root2}>
        <Outlet />
      </div>
    </RootContainer>
  );
};
