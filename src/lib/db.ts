import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data.db");
const db = new Database(dbPath);

// Reports Table
db.exec(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coordinates TEXT NOT NULL,
    location TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    status BOOLEAN NOT NULL DEFAULT false,
    reporter TEXT NOT NULL,
    type TEXT NOT NULL,
    landmark TEXT
  );
`);

// Users Table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    road_issues INTEGER DEFAULT 0,
    resolved_issues INTEGER DEFAULT 0,
    upvotes_received INTEGER DEFAULT 0,
    downvotes_received INTEGER DEFAULT 0,
    location TEXT
  );
`);

export default db;
