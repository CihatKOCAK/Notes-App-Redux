import React from "react";
import NoteCards from "./NoteCards";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { showNote } from "../features/notes/notesSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  return (
    <div id="side-bar">
      <Search />
      <div id="create-a-note" className="stored-notes" onClick={() =>  dispatch(showNote(false))}>
        <p>Create a Note</p>
      </div>
      <NoteCards />
    </div>
  );
}
