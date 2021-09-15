import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Account from './routers/account.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/', Account)



const URI = process.env.DATABASE_URL;
mongoose.connect(URI, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log('error', err)
    })