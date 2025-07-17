export interface User {
  id: number;
  name: string;
  role: string;
}

export const users: User[] = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Project Manager" },
];
