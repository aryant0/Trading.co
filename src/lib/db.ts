import Database from 'better-sqlite3';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

const db = new Database(':memory:'); // In-memory database for development

// Create users table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type User = z.infer<typeof UserSchema>;

export const createUser = (user: User) => {
  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  return stmt.run(user.email, user.password);
};

export const findUserByEmail = (email: string) => {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
};

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch (error) {
    return null;
  }
};