import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { IPolishExtraLeagueState } from './interfaces';

const initialState: IPolishExtraLeagueState = {
  standings: [],
  positionsHistory: {},
  teams: []
};

const polishExtraLeagueSlice = createSlice({
  name: 'polishExtraLeague',
  initialState,
  reducers: {}
});

export default polishExtraLeagueSlice.reducer;
