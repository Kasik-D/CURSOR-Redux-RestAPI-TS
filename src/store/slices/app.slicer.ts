import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type ErrorType = string | null;

type InitialState = {
  error: ErrorType;
  isLoading: boolean;
};

const initialState: InitialState = {
  error: null,
  isLoading: false,
};

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{ error: ErrorType }>) {
      state.error = action.payload.error;
    },
    setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const isLoadingSelector = (state: RootState) => state.app.isLoading;

export const { setError, setIsLoading } = appSlicer.actions;
export default appSlicer.reducer;
