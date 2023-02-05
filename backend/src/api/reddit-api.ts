import Snoowrap from 'snoowrap';
import dotenv from 'dotenv';
import {Timespan} from '../type/types';

dotenv.config();

const reddit = new Snoowrap({
    userAgent: 'My Reddit app',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
});

reddit.config({
    requestDelay: 1001
});

const getPosts = async (subName: string, time: Timespan, limit: number) => {
    try {
        const subreddit = reddit.getSubreddit(subName);

        const [top, hot, newPosts, controversial] = await Promise.all([
            subreddit.getTop({time, limit}),
            subreddit.getHot({limit}),
            subreddit.getNew({limit}),
            subreddit.getControversial({time, limit})
        ]);

        return {
            top: top,
            hot: hot,
            new: newPosts,
            controversial: controversial
        };
    } catch (error) {
        console.error('Error: Subreddit not found');
    }
};

export const RedditApi = {
    getPosts
}
