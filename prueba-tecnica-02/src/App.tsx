import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1 ', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then(setData)
  }, [])

  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default App
//https://developer.themoviedb.org/reference/tv-series-top-rated-list
