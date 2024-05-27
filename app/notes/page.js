"use client";
import { useEffect, useState } from "react";
import db from "../appwrite/database";
import NoteForm from "../components/noteForm";
import { Query } from "appwrite";
import Note from "../components/notes";
import ThemeSwitch from "../components/themeSwitch";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const databaseId = process.env.NEXT_PUBLIC_C_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_C_COLLECTION_ID_TASKS;

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await db.tasks.list([Query.orderDesc("$createdAt")]);

    setNotes(res.documents);
  };

  return (
    <main>
      <div className="flex items-center justify-between mt-20 mb-8">
        <h1 className="w-full text-4xl font-semibold text-textPrimary">
          🐧MiDo
        </h1>

        <div className="flex gap-3">
          <ThemeSwitch theme="dark" bg="bg-gray-950" />
          <ThemeSwitch theme="light" bg="bg-white" />
          <ThemeSwitch theme="purple" bg=" bg-purple-900" />
        </div>
      </div>
      <NoteForm setNotes={setNotes} />
      {notes.map((note) => (
        <Note key={note.$id} noteData={note} setNotes={setNotes} />
      ))}
    </main>
  );
}
