import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [{ id: 1, title: "hello world!", content: "heloo", color: "green" }],
    oldItems: [],
    showNote: {
      state: false,
      index: 0,
    },
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    showNote: (state, action) => {
      state.showNote = action.payload;
    },
    filterNotes: (state, action) => {
      if (state.oldItems) {state.oldItems = [...state.items];}
      state.items = state.items.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (action.payload.lenght === 0) state.items = state.oldItems;
    },
    selectedNote: (state, action) => {
      state.items = action.payload;
    },
    updateNote: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addNote,
  deleteNote,
  showNote,
  filterNotes,
  updateNote,
  removeNote,
} = notesSlice.actions;
export default notesSlice.reducer;
