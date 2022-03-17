import 'module-alias/register';
import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});