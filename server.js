require('dotenv').config();
const express = require('express');

const db = require('./utils/db/db');
const taskRouter = require('./routes/tasks.router');

// mongodb connection
db(process.env.MONGO_URI);

const app = express();

app.use(express.json());

app.use('/api/v1', taskRouter);


app.listen(3000, () => {
    console.log(`server listening on PORT 3000`);
});