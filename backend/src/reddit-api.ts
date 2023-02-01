import snoowrap, {Listing, Submission, Subreddit} from 'snoowrap';
import dotenv from 'dotenv';
import { Timespan } from "./types";

dotenv.config();

const reddit = new snoowrap({
    userAgent: 'My Reddit statistics app',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
});

const getTopPosts = async (sub: string, time: Timespan, limit: number) => {
    const subreddit: Subreddit = reddit.getSubreddit(sub);
    const topPosts: Listing<Submission> = await subreddit.getTop({time: time, limit: limit});
    let data: {link: string, text: string, score: number}[] = [];

    topPosts.forEach((post: Submission) => {
        data.push({
            link: post.url,
            text: post.title,
            score: post.score
        })
    });

    return data;
};


export const RedditApi = {
    getTopPosts
}
