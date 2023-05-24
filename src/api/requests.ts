import axios from './api';
import { ErrorHandler } from '@/helpers/helpers';
import { AxiosListItems, Genres } from './api-types';
import { searchParamsType } from '@/constants/search-params';

export const getGenres = async () => {
  try {
    const response = await axios.get<Genres>('genre');
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getListItems = async (params: searchParamsType) => {
  try {
    const response = await axios.get<AxiosListItems>('anime', {
      params: {
        ...params,
        page: 1,
        size: 20,
      },
    });
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};
