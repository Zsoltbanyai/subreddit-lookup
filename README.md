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

## Prerequisites
- Node.js
- npm

## Quick Start
0. Before you start, you're going to need a token to communicate with Reddit's API. Refer to [this](https://browntreelabs.com/scraping-reddits-api-with-snoowrap/) link to get started. After you acquired the credentials, you're going to have to create a .env file in the backend directory.

1. Clone the repository: `git clone https://github.com/Zsoltbanyai/subreddit-lookup.git`
2. Change into the directory: `cd subreddit-lookup`
3. Install dependencies: `npm install` in both the **frontend** and **backend** directories
4. Start the development server: `npm start` in the root directory
5. Open http://localhost:5173 in your browser
