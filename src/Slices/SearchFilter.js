import { createSlice } from "@reduxjs/toolkit";

const SearchFilter = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    setSearchTerm: (state, action) => {
    return state=action.payload
    },
  },
});
export const { setSearchTerm } = SearchFilter.actions;
export default SearchFilter.reducer;
