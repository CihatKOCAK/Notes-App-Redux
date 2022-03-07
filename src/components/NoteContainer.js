import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/notesSlice";
import { nanoid } from "nanoid";

export default function NoteContainer() {
  const showNote = useSelector((state) => state.notes.showNote);
  const dispatch = useDispatch();
  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), title, content, color }));
    setTitle("");
    setContent("");
  };

  // useEffect(() => {
  //   if (showNote) {
  //     setTitle(showNote.title);
  //     setContent(showNote.content);
  //     setColor(showNote.color);
  //   }
  // }, [showNote]);

  return (
    <div className="note-container">
      {showNote ? (
        <>
          <h1>Re-read your thoughts</h1>
          <div className="head-read-container">
            <h1>Hello Wo</h1>
            <p className="close">x</p>
          </div>
          <p id="read-note-content">You did it</p>
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
