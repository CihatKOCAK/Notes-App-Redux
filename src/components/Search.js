import React from "react";
import { useDispatch } from "react-redux";
import { filterNotes } from "../features/notes/notesSlice";
export default function Search() {
  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    dispatch(filterNotes(e.target.value));

  };

  return (
    <div className="search-bar">
      <input onChange={handleSearch} type="text" placeholder="Search" />
    </div>
  );
}
