import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {RedditApi} from './api/reddit-api';

dotenv.config();

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use('/api', router);

const port = process.env.PORT;

router.post('/subreddit/posts', async (req: express.Request, res: express.Response): Promise<void> => {
    const { subName, time, limit } = req.body;
    const posts = await RedditApi.getPosts(subName, time, limit);
    res.send(posts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
