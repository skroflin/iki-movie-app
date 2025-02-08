import { dbClient, query, transactionQuery } from "../database";

export async function getAllMovies() {
  const movies = await query(`
      select
      id,
      series_title,
      released_year
      from
      imdb_movies  
    `)
  return movies.rows
}

export async function getMovieById(movieId: string) {
  const movie = await query(`
      select
      *
      from
      imdb_movies
      where "id" = $1  
    `, [movieId])

  if (movie.rowCount === 0) {
    throw new Error(`Movie with ${movieId} doesn't exist.`)
  }
  return movie.rows[0]
}