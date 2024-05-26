"use client";
import { useEffect, useState } from "react";
import { database } from "../appwrite/config";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  const databaseId = process.env.NEXT_PUBLIC_C_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_C_COLLECTION_ID_TASKS;

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await database.listDocuments(databaseId, collectionId);

    setNotes(res.documents);
  };

  return (
    <main>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.$id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
