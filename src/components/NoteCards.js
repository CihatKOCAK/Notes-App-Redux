import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNote, deleteNote } from "../features/notes/notesSlice";

export default function NoteCards() {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote({ id }));
    dispatch(showNote({ state: false, index: 0 }));
  };
  return (
    <>
      {items &&
        items.map(
          (item, index) =>
              <div
                className="stored-notes"
                style={{ backgroundColor: item.color }}
                key={index}
              >
                <div
                  style={{ with: "200px" }}
                  onClick={() =>
                    dispatch(
                      showNote({
                        state: true,
                        index: index,
                        selectedID: item.id,
                      })
                    )
                  }
                >
                  <h2 id="note-title">
                    {item && item.title.length > 15
                      ? item.title.substring(0, 15) + "..."
                      : item.title}
                  </h2>
                  <p id="note-content">
                    {item.content.length > 25
                      ? item.content.substring(0, 25) + "..."
                      : item.content}
                  </p>
                </div>

                <p
                  className="delete-note"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </p>
              </div>
            
        )}
    </>
  );
}
