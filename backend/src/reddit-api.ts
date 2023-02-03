import snoowrap from 'snoowrap';
import dotenv from 'dotenv';
import {Timespan} from "./type/types";

dotenv.config();

const reddit = new snoowrap({
    userAgent: 'My Reddit app',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
});

reddit.config({
    requestDelay: 1001
});

const getPosts = async (subName: string, postType: string, time: Timespan, limit: number) => {
    try {
        const subreddit = reddit.getSubreddit(subName);

        return postType === 'TOP'
            ? await subreddit.getTop({time, limit})
            : postType === 'HOT'
                ? await subreddit.getHot({limit})
                : postType === 'NEW'
                    ? await subreddit.getNew({limit})
                    : await subreddit.getControversial({time, limit});
    } catch (error) {
        console.error('Error: Subreddit not found');
    }
};

export const RedditApi = {
    getPosts
}
