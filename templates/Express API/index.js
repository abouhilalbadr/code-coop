import express from 'express';
import createError from 'http-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', async (req, res, next) => {
    res.send({ message: 'Welcome to Code Coop 👋' });
});

app.use('/image', express.static('images'));

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
