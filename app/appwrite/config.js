"use client";
import { Client, Databases } from "appwrite";
const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_C_END_POINT;
const projectId = process.env.NEXT_PUBLIC_C_PORJECT_ID;

client.setEndpoint(endpoint).setProject(projectId);

const database = new Databases(client);

export { client, database };
