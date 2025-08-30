

import './App.css'
import React, { useState } from "react";

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
  const [selectedFruit, setSelectedFruit] = useState("");

  // Filtrar según la fruta seleccionada
  const filteredFruits = selectedFruit
    ? fruits.filter((fruit) => fruit === selectedFruit)
    : fruits;

  return (
    
      <>
        <h2>Lista de Frutas</h2>
        <ul>
        { 
          fruits.map((fruit,index) => (<li>
              <li> <b> al Indice {index} </b> le asigno fruta {fruit} </li>

          </li>))
          

        }
        {/* ((iterador, indice)) => (lo que entrega)  */}
      </ul>

      <div>
      <h2>Filtrar frutas</h2>

      {/* Selector para elegir fruta */}
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

      {/* Lista de frutas filtradas */}
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}><b> al Indice {index} </b> le asigno fruta {fruit}</li>
        ))}
      </ul>
    </div>
      
      </>
    
  )
}

export default App
