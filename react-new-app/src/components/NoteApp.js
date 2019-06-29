import React, { useState, useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = title => {
    dispatch({
      type: "REMOVE_NOTE",
      title
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm dispatch={dispatch} />
    </div>
  );
};

export { NoteApp as default };
