import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/app.slicer';
import homeReducer from './slices/home.slicer';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({ app: appReducer, home: homeReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
