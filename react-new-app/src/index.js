import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    console.log("fetch notes data at begin.");
    const notesData = JSON.parse(localStorage.getItem("notes")) || [];
    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    console.log("save notes data.");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = e => {
    e.preventDefault();
    const addedNotes = [...notes, { title, body }];
    setNotes(addedNotes);
    localStorage.setItem("notes", JSON.stringify(addedNotes));
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("Setting up effect on note");

    return () => {
      console.log("Cleaning up effect");
    };
  }, []);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

// ReactDOM.render(<App count={10} />, document.getElementById("root"));
ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
