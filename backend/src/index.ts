import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const router = express.Router();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use('/api', router);

const port = process.env.PORT || 3000;

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
