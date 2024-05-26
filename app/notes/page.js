"use client";
import { useEffect, useState } from "react";
import db from "../appwrite/database";
import NoteForm from "../components/noteForm";
import { Query } from "appwrite";
import Note from "../components/notes";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  const databaseId = process.env.NEXT_PUBLIC_C_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_C_COLLECTION_ID_TASKS;

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await db.tasks.list([Query.orderDesc('$createdAt')]);

    setNotes(res.documents);
  };

  return (
    <main>
      <h1>Notes</h1>
      <NoteForm setNotes={setNotes}/>
      {notes.map((note) => (
        <Note key={note.$id} noteData={note}/>
      ))}
    </main>
  );
}
