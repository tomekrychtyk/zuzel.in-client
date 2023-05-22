import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { IPolishLeagueState } from '@/interfaces';

const initialState: IPolishLeagueState = {
  standings: [],
  positionsHistory: {},
  teams: []
};

const polishFirstLeagueSlice = createSlice({
  name: 'polishFirstLeague',
  initialState,
  reducers: {}
});

export default polishFirstLeagueSlice.reducer;
