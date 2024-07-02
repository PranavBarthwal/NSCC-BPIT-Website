import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://api.appwrite.io/v1')
  .setProject('6683dc450037b8368bc4');

const databases = new Databases(client);

export { client, databases };
