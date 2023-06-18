import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFavorites {
  id: number;
}
const INITIAL_STATE: IFavorites[] = [];

const sliceFavorites = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    addFavorites(state, { payload }: PayloadAction<number>) {
      return [...state, { id: payload }];
    },
    removeSpecifcFavorite(state, { payload }: PayloadAction<number>) {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export default sliceFavorites.reducer;
export const { addFavorites, removeSpecifcFavorite } = sliceFavorites.actions;

export const useFavorites = (state: { favorites: IFavorites[] }) => {
  return state.favorites as IFavorites[];
};
