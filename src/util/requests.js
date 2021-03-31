const key = '';

const requests = {
  nowPlaying: 'movie/now_playing?api_key=' + key,
  trending: 'trending/movie/day?api_key=' + key,
  search: 'search/movie?api_key=' + key,
};

export default requests;
