import 'module-alias/register';
import express from 'express';
import { greeterRouter } from '@controllers/';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000; // default port to listen

app.get('/', (req, res) => {
    return res.status(200).json({message:"Welcome to the App API"});
});
app.use('/api', greeterRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});