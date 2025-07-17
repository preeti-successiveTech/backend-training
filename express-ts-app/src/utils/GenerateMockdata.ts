import express from 'express';

const app = express();
const PORT = 3001;

export interface MockUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee'];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMockUsers(count: number = 10): MockUser[] {
  const users: MockUser[] = [];

  for (let i = 1; i <= count; i++) {
    const first = getRandom(firstNames);
    const last = getRandom(lastNames);
    const name = `${first} ${last}`;
    const email = `${first.toLowerCase()}.${last.toLowerCase()}${i}@example.com`;
    const avatar = `https://api.multiavatar.com/${first}${i}.png`;

    users.push({ id: i, name, email, avatar });
  }

  return users;
}

export const mockUsers: MockUser[]= generateMockUsers(5);



