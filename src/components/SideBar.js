import React from "react";
import NoteCards from "./NoteCards";
import Search from "./Search";

export default function SideBar() {
  return (
    <div id="side-bar">
    <Search />
      <div id="create-a-note" className="stored-notes">
        <p>Create a Note</p>
      </div>
      <NoteCards />
    </div>
  );
}
