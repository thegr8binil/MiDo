"use client";
import { useState } from "react";
import db from "../appwrite/database";
export default function Note({ noteData }) {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    db.tasks.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
  };
  return (
    <main>
      <div onClick={handleUpdate}>
        {note.completed ? <strike>{note.body}</strike> : note.body}
      </div>
    </main>
  );
}
