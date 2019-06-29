import React, { useState } from "react";

const AddNoteForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={addNote}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={body} onChange={e => setBody(e.target.value)} />
      <button>add note</button>
    </form>
  );
};

export { AddNoteForm as default };