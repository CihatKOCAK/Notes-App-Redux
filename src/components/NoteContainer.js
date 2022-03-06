import React, { useState } from "react";
import Colors from "./Colors";

export default function NoteContainer() {
  const [addNote, setAddNote] = useState(false);
  return (
    <div className="note-container">
      {addNote ? (
        <>
          <input id="new-note-title" type="text" placeholder="title" />
          <textarea
            name=""
            id="new-note-content"
            placeholder="Jot a note down"
            cols="80"
            rows="20"
          /> 
          <Colors />
          <button id="button">Submit Note</button>
        </>
      ) : (
        <>
          <h1>Re-read your thoughts</h1>
          <h1 id="read-note-title">Hello World</h1>
          <p id="read-note-content">You did it</p>
        </>
      )}
    </div>
  );
}
