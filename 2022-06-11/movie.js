const APIKEY = "cdcbbb684ee8d336cae158efbb06d523"
const IMAGE_URL=""
const popularURL ="https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdcbbb684ee8d336cae158efbb06d523&language=en-US"

fetch(popularURL)
    .then(response=>response.json())
    .then(response => {console.log(response)});
