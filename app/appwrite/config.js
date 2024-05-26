import { Client, Databases } from "appwrite";

const client = new Client();

const endpoint = process.env.C_END_POINT;
const projectId = process.env.C_PROJECT_ID;
client.setEndpoint(endpoint).setProject(projectId);

const database = new Databases(client);

export { client, database };

