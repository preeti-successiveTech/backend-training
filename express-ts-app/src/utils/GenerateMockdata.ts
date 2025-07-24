import express from 'express';

export interface MockUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}
export class GenerateMockdata{
  private firstNames = ['Alice', 'Bob', 'Charlie', 'Diana'];
  private lastNames = ['Smith', 'Johnson', 'Brown', 'Lee'];

  private getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public generateUsers(count: number = 10): MockUser[] {
    const users: MockUser[] = [];

    for (let i = 1; i <= count; i++) {
      const first = this.getRandom(this.firstNames);
      const last = this.getRandom(this.lastNames);
      const name = `${first} ${last}`;
      const email = `${first.toLowerCase()}.${last.toLowerCase()}${i}@example.com`;
      const avatar = `https://api.multiavatar.com/${first}${i}.png`;

      users.push({ id: i, name, email, avatar });
    }

    return users;
  }
}
