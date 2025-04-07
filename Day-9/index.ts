import express from "express";

import fs from 'fs';
import path from 'path';

const app= express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'users.json');

app.use(express.json());

// Read users from file
const readUsers = (): any[] => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return data ? JSON.parse(data) : [];
};

// Write users to file
const writeUsers = (users: any[]) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

// POST - Create a new user
app.post('/users', (req: Request, res: Response) => {
    const users = readUsers();
    const newUser = req.body;

    if (!newUser.email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    if (users.find(user => user.email === newUser.email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push(newUser);
    writeUsers(users);
    res.status(201).json({ message: 'User created', user: newUser });
});

// PUT - Update a user by email
app.put('/users/:email', (req: Request, res: Response) => {
    const users = readUsers();
    const { email } = req.params;
    const updatedUser = req.body;

    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users[userIndex] = { ...users[userIndex], ...updatedUser };
    writeUsers(users);
    res.json({ message: 'User updated', user: users[userIndex] });
});

// GET - Get a user by email
app.get('/users/:email', (req: Request, res: Response) => {
    const users = readUsers();
    const user = users.find(user => user.email === req.params.email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// DELETE - Delete a user by email
app.delete('/users/:email', (req: Request, res: Response) => {
    let users = readUsers();
    const { email } = req.params;
    
    if (!users.find(user => user.email === email)) {
        return res.status(404).json({ message: 'User not found' });
    }

    users = users.filter(user => user.email !== email);
    writeUsers(users);
    res.json({ message: 'User deleted' });
});

// GET - Get all users
app.get('/users', (req: Request, res: Response) => {
    const users = readUsers();
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
