import axios from "axios";
const baseURL = 'http://localhost:3001/api/';

async function getData(): Promise<void> {
    try {
        const response = await axios.get(`${baseURL}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const API = {
    getData
}
