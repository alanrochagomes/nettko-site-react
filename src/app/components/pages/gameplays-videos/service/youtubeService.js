const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
const MAX_RESULTS = 50;

export const fetchVideos = async (pageToken = "") => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&pageToken=${pageToken}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return {
      fetchedVideos: data.items,
      newNextPageToken: data.nextPageToken || null,
    };
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return {
      fetchedVideos: [],
      newNextPageToken: null,
    };
  }
};
