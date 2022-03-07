import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        title: "Note 1Note 1Note 1Note 1Note 1Note 1",
        content:
          "Note 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 contentNote 1 content",
        color: "red",
      },
      { id: 2, title: "Note 2", content: "Note 2 content", color: "green" },
      { id: 3, title: "Note 3", content: "Note 3 content", color: "blue" },
    ],
    showNote: true,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    showNote: (state, action) => {
      state.showNote = action.payload;
    },
    filterNotes: (state, action) => {
      state.items = action.payload;
    }


  },
});

export const { addNote,deleteNote,showNote,filterNotes } = notesSlice.actions;
export default notesSlice.reducer;
