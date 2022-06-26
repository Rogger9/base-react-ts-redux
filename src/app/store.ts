import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import CartReducer from '../redux/cartSlice';
import SearchReducer from '../redux/searchSlice';
import { RecursivePartial } from '../utils/recursivePartialType';

export const rootReducer = {
  cart: CartReducer,
  search: SearchReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type InitialRootState = RecursivePartial<RootState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
