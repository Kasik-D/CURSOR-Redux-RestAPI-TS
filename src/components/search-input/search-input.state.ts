import { searchParams } from 'constants/search-params';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchInput = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onClickSearchButton = () => {
    setSearchParams((params) => {
      if (value) {
        params.set(searchParams.search, value);
      } else {
        params.delete(searchParams.search);
      }
      return params;
    });
  };

  return {
    value,
    onInputChange,
    onClickSearchButton,
  };
};
