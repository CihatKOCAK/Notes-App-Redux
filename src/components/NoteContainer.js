import React, { useState } from "react";
import Colors from "./Colors";
import { useSelector } from "react-redux";

export default function NoteContainer() {
  const showNote = useSelector((state) => state.notes.showNote);
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
      )}
    </div>
  );
}
