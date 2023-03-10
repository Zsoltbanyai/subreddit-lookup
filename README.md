# Subreddit Lookup

A web application that allows users to view subreddit data using Reddit's API. This project was created to demonstrate knowledge of modern web development technologies including TypeScript, React, Node.js, and Chakra UI.

## Demo
The project is fully deployed to Firebase. Click [here](https://subreddit-lookup-1f95a.web.app/) to try it out.

## Tech Stack
- TypeScript
- React
- Node.js/Express.js
- Chakra UI
- Reddit API (snoowrap)
- Firebase

## Features
- Display of 10 submissions from top, hot, new, and controversial categories of a subreddit
- Tabbed navigation between categories
- In case a subreddit is not found, an error toast is shown on the top right

## Prerequisites
- Node.js
- npm

## Quick Start
1. Clone the repository: `git clone https://github.com/Zsoltbanyai/subreddit-lookup.git`
2. Change into the directory: `cd subreddit-lookup`
3. Install dependencies: `npm install` in both the **frontend** and **backend** directories
4. Before you start, you're going to need a token to communicate with Reddit's API. Refer to [this](https://browntreelabs.com/scraping-reddits-api-with-snoowrap/) link to get started. After you acquired the credentials, you're going to have to create a .env file in the backend directory and add the following:
- `CLIENT_ID=<your client id>`
- `CLIENT_SECRET=<your client secret>`
- `REFRESH_TOKEN=<your refresh token>`
- `PORT=3001`
5. Start the development server: `npm start` in the root directory
6. Open http://localhost:5173 in your browser
