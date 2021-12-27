class Youtube {
  constructor(key) {
    this.axios = require('axios');
    this.key = key;
    this.getRequestConfig = {
      method: 'get',
      headers: {},
    };
  }

  async mostPopular() {
    const config = this.getRequestConfig;
    config.url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;

    const response = await this.axios(config);
    return response.data.items;
  }

  async search(query) {
    const config = this.getRequestConfig;
    config.url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`;

    const response = await this.axios(config);
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
