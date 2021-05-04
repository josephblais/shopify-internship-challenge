const API_KEY = process.env.REACT_APP_API_KEY;
const OMDB_URL = `https://www.omdbapi.com/`;

export default async function getMoviesByTitle(query) {
  const encodedQuery = query.trim().replace(" ", "+")
  const movies = await fetch(`${OMDB_URL}?apikey=${API_KEY}&s=${encodedQuery}&type=movie&page=1`)
                      .then(res => res.json())
                      .then(results => results.Search)

  return movies;
}
