import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNote,deleteNote } from "../features/notes/notesSlice";

export default function NoteCards() {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
//delete dont work
  const handleDelete = () => {
    dispatch(deleteNote({ id: showNote.selectedID }));
    dispatch(showNote({ state: false, index: 0 }));
  };
  return (
    <>
      {items && items.map((item,index) => (
        <div
          className="stored-notes"
          style={{ backgroundColor: item.color }}
          key={index}
          onClick = {() => dispatch(showNote({state:true, index:index, selectedID:item.id}))}
        >
          <div>
            <h2 id="note-title">
              {item.title.length > 15
                ? item.title.substring(0, 15) + "..."
                : item.title}
            </h2>
            <p id="note-content">
              {item.content.length > 25
                ? item.content.substring(0, 25) + "..."
                : item.content}
            </p>
          </div>

          <p className="delete-note" onClick={() =>handleDelete()}>x</p>
        </div>
      ))}
    </>
  );
}
