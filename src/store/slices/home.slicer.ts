import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Genres, ListItems } from 'api/api-types';
import { getGenres, getListItems } from 'api/requests';
import { searchParamsType } from 'constants/search-params';
import { isString } from 'helpers/helpers';

import { RootState } from '../store';
import { setError, setIsLoading } from './app.slicer';

type InitialState = {
  genres: Genres;
  listItems: ListItems;
  isLoadingListItems: boolean;
};

const initialState: InitialState = {
  genres: [],
  listItems: [],
  isLoadingListItems: false,
};

export const fetchGenres = createAsyncThunk(
  'home/fetchGenres',
  async function (_, { dispatch, rejectWithValue, getState }) {
    const state = getState() as RootState;
    if (state.home.genres.length === 0) {
      dispatch(setIsLoading({ isLoading: true }));
      try {
        dispatch(setError({ error: null }));
        return await getGenres();
      } catch (error) {
        if (isString(error)) {
          dispatch(setError({ error }));
        }
        return rejectWithValue(error);
      } finally {
        dispatch(setIsLoading({ isLoading: false }));
      }
    }
  },
);

export const fetchListItems = createAsyncThunk(
  'home/fetchListItems',
  async function (params: searchParamsType, { dispatch, rejectWithValue }) {
    try {
      dispatch(setError({ error: null }));
      return await getListItems(params);
    } catch (error) {
      if (isString(error)) {
        dispatch(setError({ error }));
      }
      return rejectWithValue(error);
    }
  },
);

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGenres.fulfilled, (state, { payload }) => {
      if (payload) {
        state.genres = payload;
      }
    });

    builder.addCase(fetchListItems.pending, (state) => {
      state.isLoadingListItems = true;
    });
    builder.addCase(fetchListItems.fulfilled, (state, { payload }) => {
      if (payload) {
        state.listItems = payload.data;
      }
      state.isLoadingListItems = false;
    });
    builder.addCase(fetchListItems.rejected, (state) => {
      state.isLoadingListItems = false;
    });
  },
});

export const genresSelector = (state: RootState) => state.home.genres;
export const listItemsSelector = (state: RootState) => state.home.listItems;
export const isLoadingListItemsSelector = (state: RootState) => state.home.isLoadingListItems;

export default homeSlicer.reducer;
