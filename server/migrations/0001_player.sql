-- Migration number: 0001 	 2025-06-01T10:47:18.628Z
CREATE TABLE IF NOT EXISTS player (
    id INTEGER PRIMARY KEY NOT NULL,
    player_name TEXT NOT NULL,
    position TEXT NOT NULL,
    uniform_number INTEGER NOT NULL
);