"use client";
import { useState } from "react";
export default function Note({ noteData }) {
  const [note, setNote] = useState(noteData);
  return (
    <main>
      <div>{note.completed ? <strike>{note.body}</strike> : note.body}</div>
    </main>
  );
}
