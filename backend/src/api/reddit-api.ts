import Snoowrap from 'snoowrap';
import dotenv from 'dotenv';
import {Posts, Timespan} from '../type/types';

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

const getPosts = async (subName: string, time: Timespan, limit: number): Promise<Posts | void> => {
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
        console.log('Error: Subreddit not found or no permission to access');
    }
};

export const RedditApi = {
    getPosts
}
