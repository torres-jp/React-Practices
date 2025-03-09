import './App.css'
import { useState } from 'react'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Video Juegos',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros',
  },
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    input.value = ''
  }

  const handleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id)
    })
  }

  return (
    <main>
      <aside>
        <h1>Prueba Tecnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir :
            <input
              name='item'
              type='text'
              placeholder='Introducir elemento ...'
              required
            />
          </label>
          <button>Agregar elemento</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>

        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
            {' '}
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.text}
                  <button onClick={handleRemoveItem(item.id)}>Eliminar</button>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
