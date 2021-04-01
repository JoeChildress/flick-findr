const key = '';
//const key = process.env.API_KEY;
const requests = {
  nowPlaying: 'movie/now_playing?api_key=' + key,
  trending: 'trending/movie/day?api_key=' + key,
  search: 'search/movie?api_key=' + key,
};

export default requests;

/**
 * DATA OVERVIEW
 * 
 * res.data.results
 * adult: false
backdrop_path: "/ic2ufiWL4V602cViMnhXKCRRrNi.jpg"
genre_ids: [10770, 10751, 18, 10749]
id: 244027
original_language: "en"
original_title: "Hats Off to Christmas!"
overview: "Mia (Duff), the loyal and hard-working manager of her small town's Christmas hat shop, is blindsided when her boss of over ten years asks her to train his son, Nick (Cupo), for a vacant upper-management position that Mia had been coveting. Although Nick is a handsome, successful New York City business consultant, Mia finds training him frustrating until Nick takes an interest in Mia's son Scotty, helping Scotty with a pumpkin carving contest. However, Mia's faith in Nick quickly diminishes when Nick fails to show up at the contest. To protect her son from further disappointment, Mia tries to keep Nick out of her and Scotty's fragile life, and Nick must decide if staying in the small town of Wilsonville is worth giving up the big-city perks he once had in New York. As Mia struggles to find a way to convince Scotty to return to physical therapy so he can walk again, she soon realizes that Nick may be the Christmas miracle she has been waiting for."
popularity: 3.827
poster_path: "/vPG7e8ONd35cDybzt6KDwpf9eRe.jpg"
release_date: "2014-11-28"
title: "Hats Off to Christmas!"
video: false
vote_average: 5.5
vote_count: 34
 * 
 * 
 */
