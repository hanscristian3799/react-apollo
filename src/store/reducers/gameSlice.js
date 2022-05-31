import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGames } from "./gameAPI";
import { useQuery } from "@apollo/client";

const initialState = {
  games: [],
  isLoading: false,
};

export const fetchGames = createAsyncThunk("game/getGames", async () => {
    console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHh");
//   const fetchGames = await getGames();
  const { loading, error, data } = useQuery(getGames());
  console.log("GET GAMES", data);
  return data;
});

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGames.fulfilled, (state) => {
        state.isLoading = false;
        state.games = state;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default gameSlice.reducer;
