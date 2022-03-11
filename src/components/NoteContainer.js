import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../features/notes/notesSlice";
import { nanoid } from "nanoid";

export default function NoteContainer() {
  const showNote = useSelector((state) => state.notes.showNote);
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( addNote({ id: nanoid(), title, content, color }) );
    setTitle("");
    setContent("");
    
  };

  const handleDelete = () => {
    dispatch(deleteNote({ id: showNote.selectedID }));
    dispatch(showNote({ state: false, index: 0 }));
  };

  
  useEffect(() => {
    if (showNote.state) {
      setTitle(notes[showNote.index].title);
      setContent(notes[showNote.index].content);
      setColor(notes[showNote.index].color);
    } else {
      setTitle("");
      setContent("");
      setColor("");
    }
  }, [showNote.index]);

  return (
    <div className="note-container">
      {showNote.state ? (
        <>
          <h1>Re-read your thoughts</h1>
          <div className="head-read-container">
            <h1>{title}</h1>
            <p className="close" onClick={handleDelete}>
              x
            </p>
          </div>
          <p id="read-note-content">{content}</p>
        </>
      ) : (
        <form className="note-container" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="new-note-title"
            type="text"
            placeholder="title"
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            name=""
            id="new-note-content"
            placeholder="Jot a note down"
            cols="80"
            rows="20"
          />
          <Colors setColor={setColor} />
          <button id="button">Submit Note</button>
        </form>
      )}
    </div>
  );
}
