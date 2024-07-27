<template>
    <div class="youtube-gallery">
        <div class="video" v-for="(video, index) in videos" :key="index">
            <iframe :src="'https://www.youtube.com/embed/' + video.id.videoId" frameborder="0" allowfullscreen></iframe>
            <p>{{ video.snippet.title }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { CHANNEL_ID, GOOGLE_API } from '../../auth/data.mjs'

export default {
  data() {
    return {
      videos: [],
      apiKey: GOOGLE_API,
      channelId: CHANNEL_ID
    };
  },
  mounted() {
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=10`
        );
        this.videos = response.data.items;
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
  }
};
</script>

<style scoped>
.youtube-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.video {
    width: 300px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

iframe {
    width: 100%;
    height: 200px;
}

p {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
}
</style>

