

import './App.css'

function App() {
   const fruits = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas"];

  return (
    
      <>
        <h2>Lista de Frutas</h2>
        <ul>
        { 
          fruits.map((fruit,index => (<li>
              <li> <b> al Indice {index} </b> le asigno fruta {fruit} </li>

          </li>)))

        }
      </ul>
      
      </>
    
  )
}

export default App
