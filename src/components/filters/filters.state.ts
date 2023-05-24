import { genresSelector } from '@/store/slices/home.slicer';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import type { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { searchParams as SP } from '@/constants/search-params';

type MyOption = { label: string; value: string };

// eslint-disable-next-line no-unused-vars
type SelectOnChangeMultiValue = (newValue: MultiValue<MyOption>, actionMeta: ActionMeta<MyOption>) => void;
// eslint-disable-next-line no-unused-vars
type SelectOnChangeSingleValue = (newValue: SingleValue<MyOption>, actionMeta: ActionMeta<MyOption>) => void;

export const useFilters = () => {
  const genres = useSelector(genresSelector);

  const [searchParams, setSearchParams] = useSearchParams();

  const [genreValue, setGenreValue] = useState<MultiValue<MyOption>>();
  const [sortByValue, setSortByValue] = useState<SingleValue<MyOption>>();
  const [sortOrderValue, setSortOrderValue] = useState<SingleValue<MyOption>>();

  const optionsGenres: MyOption[] = useMemo(
    () =>
      genres?.map((genre) => ({
        value: genre._id,
        label: genre._id,
      })) || [],
    [genres],
  );

  const onChangeGenresSelector: SelectOnChangeMultiValue = useCallback(
    (values) => {
      setGenreValue(values);
      const _values = values.map((value) => value.value);
      setSearchParams((params) => {
        if (values && values.length > 0) {
          params.set(SP.genres, _values.join(','));
        } else {
          params.delete(SP.genres);
        }
        return params;
      });
    },
    [setSearchParams],
  );

  const onChangeSortBySelector: SelectOnChangeSingleValue = useCallback(
    (value) => {
      setSortByValue(value);
      setSearchParams((params) => {
        if (value) {
          params.set(SP.sortBy, value.value);
        } else {
          params.delete(SP.sortBy);
        }
        return params;
      });
    },
    [setSearchParams],
  );

  const onChangeSortOrderSelector: SelectOnChangeSingleValue = useCallback(
    (value) => {
      setSortOrderValue(value);
      setSearchParams((params) => {
        if (value) {
          params.set(SP.sortOrder, value.value);
        } else {
          params.delete(SP.sortOrder);
        }
        return params;
      });
    },
    [setSearchParams],
  );

  useEffect(() => {
    if (searchParams.has(SP.genres)) {
      const values = searchParams.get(SP.genres)?.split(',');
      setGenreValue(
        values?.map((value) => ({
          label: value,
          value,
        })),
      );
    }
    if (searchParams.has(SP.sortBy)) {
      const value = searchParams.get(SP.sortBy) as string;
      setSortByValue({
        label: value,
        value,
      });
    }
    if (searchParams.has(SP.sortOrder)) {
      const value = searchParams.get(SP.sortOrder) as string;
      setSortOrderValue({
        label: value,
        value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    optionsGenres,
    onChangeGenresSelector,
    onChangeSortBySelector,
    onChangeSortOrderSelector,
    genreValue,
    sortByValue,
    sortOrderValue,
  };
};
