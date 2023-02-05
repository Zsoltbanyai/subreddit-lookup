import axios from 'axios';
import {Timespan} from '../../../backend/src/type/types'


const baseURL = 'http://localhost:3001/api/';

const axiosURL = axios.create({
    baseURL
});

const getPosts = async (subName: string, time: Timespan, limit: number) => {
    const response = await axiosURL.post('subreddit/posts', {
        subName,
        time,
        limit
    });
    return response.data;
}

export const BackendApi = {
    getPosts
}
