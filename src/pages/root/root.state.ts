import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'store/slices/app.slicer';
import { fetchGenres } from 'store/slices/home.slicer';
import { useAppDispatch } from 'store/store';

export const useRootState = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return {
    isLoading,
  };
};
