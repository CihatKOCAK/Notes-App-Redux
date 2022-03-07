import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "Hello World",
        content: "This is a note",
        color: "orange",
      },
      {
        id: "2a",
        title: "Hello World 2",
        content: "This is a note 2",
        color: "purple",
      },
    ],
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
      console.log(state.items);
    },
    showNote: (state, action) => {
      state.showNote = action.payload;
    },
    filterNotes: (state, action) => {
      //deleted state items -> use localstore
      if (action.payload === "") {
        state.items = state.items;
      } else {
        state.items = state.items.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      
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
