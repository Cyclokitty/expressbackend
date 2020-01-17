import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const port = 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world! I will run forever!');
});

app.listen(port, () => {
    console.log(`Expressbackend listening on port ${port}`);
});