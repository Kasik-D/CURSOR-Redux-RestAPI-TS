/* eslint-disable no-unused-vars */
import { fetchListItems, isLoadingListItemsSelector, listItemsSelector } from '@/store/slices/home.slicer';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { searchParams as SP, searchParamsType } from '@/constants/search-params';

export const useHomeState = () => {
  const dispatch = useAppDispatch();

  const [searchParams, _setSearchParams] = useSearchParams();

  const listItems = useSelector(listItemsSelector);
  const isLoadingListItems = useSelector(isLoadingListItemsSelector);

  useEffect(() => {
    const fetchList = async () => {
      const params: searchParamsType = {};
      searchParams.forEach((value, key) => {
        if (key in SP) {
          Object.assign(params, { [key]: value });
        }
      });

      await dispatch(fetchListItems(params));

      Object.keys(params).forEach((key) => {
        delete params[key as keyof typeof SP];
      });
    };
    fetchList();
  }, [dispatch, searchParams]);

  return {
    listItems,
    isLoadingListItems,
  };
};
