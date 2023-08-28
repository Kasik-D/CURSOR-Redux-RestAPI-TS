import { optionsSortBy, optionsSortOrder } from 'constants/constants';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import styled from './filters.module.css';
import { useFilters } from './filters.state';

const animatedComponents = makeAnimated();

export const Filters = () => {
  const {
    optionsGenres,
    onChangeGenresSelector,
    onChangeSortBySelector,
    onChangeSortOrderSelector,
    genreValue,
    sortByValue,
    sortOrderValue,
  } = useFilters();

  return (
    <div className={styled.root}>
      <div className={styled.container}>
        <div className={styled.select__container}>
          <Select
            value={genreValue}
            onChange={onChangeGenresSelector}
            options={optionsGenres}
            isMulti
            closeMenuOnSelect={false}
            components={animatedComponents}
          />
        </div>
        <div className={styled.select__container}>
          <Select value={sortByValue} onChange={onChangeSortBySelector} options={optionsSortBy} />
        </div>
        <div className={styled.select__container}>
          <Select value={sortOrderValue} onChange={onChangeSortOrderSelector} options={optionsSortOrder} />
        </div>
      </div>
    </div>
  );
};
