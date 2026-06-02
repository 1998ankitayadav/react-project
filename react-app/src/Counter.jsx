import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 24, fontFamily: 'Arial' }}>
      <h1>React Counter (useState)</h1>
      <p>Count: {count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button
        type="button"
        onClick={() => setCount(0)}
        style={{ marginLeft: 12 }}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter

