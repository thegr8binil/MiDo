"use client";
import { useState } from "react";
import db from "../appwrite/database";
import DeleteIcon from "../assets/DeleteIcon";

export default function Note({ setNotes, noteData }) {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    db.tasks.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
  };

  const handleDelete = async () => {
    db.tasks.delete(note.$id);
    setNotes((prevState) => prevState.filter((n) => n.$id !== note.$id));
  }

  return (
    <main>
      <div onClick={handleUpdate}>
        {note.completed ? <strike>{note.body}</strike> : note.body}
      </div>
      <div onClick={handleDelete}>
        <DeleteIcon/>
      </div>
    </main>
  );
}
