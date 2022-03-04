import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
    },
    reducers: {},
    // Thunks
    extraReducers: {
    },
  });
  

  

  //for reducers
  export const { addTodo, setFilter } = notesSlice.actions;
  export default notesSlice.reducer;
  