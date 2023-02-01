import axios from "axios";
import {Timespan} from '../../../backend/src/types'
const baseURL = 'http://localhost:3001/api/';

async function getData(): Promise<void> {
    try {
        const response = await axios.get(`${baseURL}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getSubreddit(sub: string, time: Timespan, limit: number): Promise<void> {
    try {
        const response = await axios.post(`${baseURL}subreddit/top`, {
            sub,
            time,
            limit
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const BackendApi = {
    getData,
    getSubreddit
}
