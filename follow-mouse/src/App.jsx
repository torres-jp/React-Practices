import { useState, useEffect } from 'react'

/**
 * The App component tracks the mouse pointer's position and toggles the visibility
 * of a circular indicator that follows the mouse. When the "Activar Puntero" button
 * is clicked, it enables or disables the pointer tracking.
 */

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (evt) => {
      const { clientX, clientY } = evt
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Puntero
      </button>
    </>
  )
}



function App() {

  return (
    <main>
      <FollowMouse />

    </main>
  )
}

export default App
