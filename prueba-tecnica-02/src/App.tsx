import { useEffect, useState } from 'react'
import './App.css'

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: Date
  name: string
  vote_average: number
  vote_count: number
}

function getRandomMoive(movies: Movie[]): Movie {
  return movies[Math.floor(Math.random() * movies.length)]
}

function getPartialMovieName(movie: Movie): string {
  const indexes = Array.from({ length: movie.name.length }, (_, index) => index)
    .sort(() => (Math.random() >= 0.5 ? 1 : -1))
    .slice(0, Math.floor(movie.name.length / 2))

  return movie.name.split('').reduce((name, letter, index) => {
    if (indexes.includes(index)) name = name.concat(letter)

    return name
  }, '')
}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1 ', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((res) => res.json() as Promise<{ results: Movie[] }>)
      .then((data) => setMovie(getRandomMoive(data.results)))
  }, [])

  if (!movie) {
    return <div>Loading...</div>
  }

  console.log(getPartialMovieName(movie))

  return <main>{movie.name}</main>
}

export default App
