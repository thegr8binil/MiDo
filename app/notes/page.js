"use client";
import { useEffect, useState } from "react";
import { database } from "../appwrite/config";
export default function Notes() {

  const databaseId = process.env.C_DATABASE_ID
  const collectionId= process.env.C_COLLECTION_ID

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await database.listDocuments(
      databaseId,
      collectionId
    );

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

