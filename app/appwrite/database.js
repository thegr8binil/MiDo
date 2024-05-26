import { database } from "./config";
import { ID } from "appwrite";

const db = {};

const collections = [
    {
        dbId: process.env.NEXT_PUBLIC_C_DATABASE_ID,
        id: process.env.NEXT_PUBLIC_C_COLLECTION_ID_TASKS,
        name: "tasks",
    },
];

collections.forEach((col) => {
    db[col.name] = {
        create: (payload, permissions, id = ID.unique()) =>
            database.createDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        update: (id, payload, permissions) =>
            database.updateDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        delete: (id) => database.deleteDocument(col.dbId, col.id, id),

        list: (queries = []) =>
            database.listDocuments(col.dbId, col.id, queries),

        get: (id) => database.getDocument(col.dbId, col.id, id),
    };
});

export default db;