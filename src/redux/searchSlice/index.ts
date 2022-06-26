import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type SearchState = {
  name: string;
};

export const initialState: SearchState = {
  name: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<SearchState['name']>) => {
      state.name = action.payload;
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export const getSearch = (state: RootState) => state.search.name;

export default searchSlice.reducer;
