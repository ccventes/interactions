
import React, { useState } from 'react';
import './App.css'

function App() {
  const fruits = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana","🍊 Naranja", "🍇 Uvas","🍇 Uvas",
    "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja","🍌 Banana", "🍊 Naranja","🍊 Naranja", "🍎 Manzana","🍊 Naranja", "🍎 Manzana",
    "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja", "🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍇 Uvas","🍌 Banana", "🍊 Naranja","🍎 Manzana", "🍌 Banana",
    "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍎 Manzana", "🍌 Banana","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas", "🍎 Manzana","🍇 Uvas",
     "🍊 Naranja","🍎 Manzana", "🍌 Banana","🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja","🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja",
    "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja", "🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja",
    "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍎 Manzana", "🍌 Banana","🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja", "🍇 Uvas","🍊 Naranja", "🍎 Manzana","🍇 Uvas","🍌 Banana", "🍊 Naranja","🍌 Banana", "🍊 Naranja",
    "🍎 Manzana","🍇 Uvas","🍌 Banana", "🍊 Naranja","🍎 Manzana", "🍌 Banana","🍊 Naranja","🍊 Naranja", "🍇 Uvas","🍊 Naranja", "🍇 Uvas","🍌 Banana","🍊 Naranja", "🍇 Uvas","🍌 Banana", "🍊 Naranja","🍊 Naranja",
  ];
   const [count, setCount] = useState(0);
   const increment = () => setCount(count + 1);
  const [selectedFruit, setSelectedFruit] = useState("");
  const fruitIndexSum = fruits.reduce((acc, fruit, index) => {
    acc[fruit] = (acc[fruit] || 0) + index;
    return acc;
  }, {});

  return (
    <>
        <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        <option value="">-- Todas --</option>
        <option value="🍎 Manzana">🍎 Manzana</option>
        <option value="🍌 Banana">🍌 Banana</option>
        <option value="🍊 Naranja">🍊 Naranja</option>
        <option value="🍇 Uvas">🍇 Uvas</option>
      </select>
      {selectedFruit && (
                <p>
                  La suma de los índices de <b>{selectedFruit}</b> es:{" "}
                  <b>{fruitIndexSum[selectedFruit]}</b>
                </p>
              )}
      <ul>
            {Object.entries(fruitCounts).map(([fruit, count]) => (
              <li key={fruit}>
                {fruit}: {count} veces
              </li>
            ))}
          </ul>
     <h1>Hoy veremos sobre interacciones </h1>
      <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
    </>

  )
}

export default App
