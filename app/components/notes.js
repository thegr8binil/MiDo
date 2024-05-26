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
    <main className="flex justify-between px-2 py-3 mb-4 rounded-lg shadow-md bg-slate-100">
      <div onClick={handleUpdate} className="w-full">
        {note.completed ? <strike>{note.body}</strike> : note.body}
      </div>
      <div onClick={handleDelete} className="flex items-center justify-center bg-blue-200 rounded-full w-7 h-7">
        <DeleteIcon/>
      </div>
    </main>
  );
}
