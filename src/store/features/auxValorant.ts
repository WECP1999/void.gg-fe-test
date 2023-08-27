import IPlayer from '@/interfaces/IPlayer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ValorantPlayers = {
  players: IPlayer[];
  loading: boolean;
};

const initialState = {
  players: [],
  loading: false,
} as ValorantPlayers;

export const valorantPlayers = createSlice({
  name: 'valorantPlayers',
  initialState,
  reducers: {
    reset: () => initialState,
    addPlayers: (state, action: PayloadAction<IPlayer[]>) => {
      return {
        ...state,
        players: [...state.players, ...action.payload],
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { reset, addPlayers, setLoading } = valorantPlayers.actions;
export default valorantPlayers.reducer;
