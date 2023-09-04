import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        dbName: process.env.DATABASE,
    })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log('Databse connection failed!'));


app.post('/register', async (req, res) => {
    // const user = new User(req.body);

    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
            telephone: req.body.telephone,
            gender: req.body.gender
        });
        res.status(200).json({
            success: true,
            message: 'User created'
        });

    } catch(error) {
        console.log({error});
        res.status(400).json({
            message: 'Failed to create a user.'
        });
    }
});

app.get('/list', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: 'Here are all users',
            data: users
        });

    } catch(error) {
        res.status(400).json({
            message: 'Failed to show all users'
        });
    }
});


app.listen(port, () => {
    console.log('Server running on port', port)
});
