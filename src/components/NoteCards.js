import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNote } from "../features/notes/notesSlice";

export default function NoteCards() {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  console.log(items);
  return (
    <>
      {items.length >1 && items.map((item) => (
        <div
          className="stored-notes"
          style={{ backgroundColor: item.color }}
          key={item.id}
          onClick = {() => dispatch(showNote(true))}
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

          <p className="delete-note">x</p>
        </div>
      ))}
    </>
  );
}
