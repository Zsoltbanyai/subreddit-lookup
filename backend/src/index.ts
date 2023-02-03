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

router.post('/subreddit/posts', async (req: express.Request, res: express.Response ) => {
    const { subName, postType, time, limit } = req.body;
    const posts = await RedditApi.getPosts(subName, postType, time, limit);
    res.send(posts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
