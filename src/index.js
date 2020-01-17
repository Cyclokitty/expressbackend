import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world! I will run forever!');
});

app.listen(process.env.PORT, () => {
    console.log(`Expressbackend listening on port ${process.env.PORT}`);
});