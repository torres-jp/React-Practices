import './App.css'
import { useEffect, useMemo, useState } from 'react'

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
    .sort((index) =>
      movie.name[index] === ' ' ? 1 : Math.random() >= 0.5 ? 1 : -1
    )
    .slice(0, Math.floor(movie.name.length / 2))

  return movie.name.split('').reduce((name, letter, index) => {
    name = name.concat(indexes.includes(index) ? '_' : letter)

    return name
  }, '')
}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null)
  const partial = useMemo(() => {
    if (!movie) return ''
    return getPartialMovieName(movie)
  }, [movie])

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const guess = formData.get('partial')?.toString()

    if (guess?.toLocaleLowerCase() === movie!.name.toLocaleLowerCase()) {
      alert('Correct!')
    } else {
      alert('Incorrect')
    }
  }

  return (
    <main className='container m-auto grid min-h-screen grid-rows-[auto]'>
      <form
        onSubmit={handleSubmit}
        className='py-8  flex flex-col gap-4 font-mono '
      >
        <input
          className='p-4 text-xl tracking-widest'
          type='text'
          readOnly
          value={partial}
        />
        <input
          className='p-4 text-xl tracking-widest'
          name='partial'
          type='text'
        />
        <button type='submit'>Guess</button>
      </form>
    </main>
  )
}

export default App
