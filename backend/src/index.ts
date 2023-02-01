import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {RedditApi} from './reddit-api';

dotenv.config();

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use('/api', router);

const port = process.env.PORT || 3000;

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello from Express!');
});

router.post('/subreddit/top', async (req: express.Request, res: express.Response ) => {
    const { sub, time, limit } = req.body;
    const topPosts = await RedditApi.getTopPosts(sub, time, limit);
    res.send(topPosts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
