import express from 'express';
import cors from 'cors';

import router from './router';

const port = 3000;
const app = express();

app.use(cors({
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', router());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});