
import React, { useState } from 'react';
import './App.css'

function App() {
   const [count, setCount] = useState(0);
   const increment = () => setCount(count + 1);
  

  return (
    <>
     <h1>Hoy veremos sobre interacciones </h1>
      <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
    </>
  )
}

export default App
