import './App.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColor, setShowColor] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColor(!showColor)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    let sortedFn = (a: User, b: User) =>
      a.location.country.localeCompare(b.location.country)

    if (sorting === SortBy.NAME) {
      sortedFn = (a, b) => a.name.first.localeCompare(b.name.first)
    }

    if (sorting === SortBy.LAST) {
      sortedFn = (a, b) => a.name.last.localeCompare(b.name.last)
    }

    return filteredUsers.toSorted(sortedFn)
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear Fila</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'Cancelar' : 'Ordenar'}
          Pais
        </button>
        <button onClick={handleReset}>Reset</button>

        <input
          placeholder='filtra por pais'
          onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        <UsersList
          users={sortedUsers}
          showColor={showColor}
          deleteUsers={handleDelete}
          changeSorting={handleChangeSort}
        />
      </main>
    </>
  )
}

export default App
