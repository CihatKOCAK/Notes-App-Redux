import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [ {
      id: 1,
      title: "Hello World",
      content: "This is a note",
      color: "orange",
    },
    {
      id: 2,
      title: "Hello World",
      content: "This is a note",
      color: "purple",
    },
  ],
    showNote: true,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      console.log(state.items);
    },
    deleteNote: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    showNote: (state, action) => {
      state.showNote = action.payload;
    },
    filterNotes: (state, action) => {
      state.items = action.payload;
    },
    selectedNote: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addNote, deleteNote, showNote, filterNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
