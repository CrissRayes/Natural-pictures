import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"
import MyContext from './my_context'
import { useState } from 'react'

export default function App () {
  const [favoritos, setFavoritos] = useState( [] ) // los favoritos son un array de objetos
  const globalState = { favoritos, setFavoritos } // creamos un objeto con los favoritos y la función para modificarlos

  return (
    <div className="App">
      <MyContext.Provider value={ globalState }> {/* envolvemos todo el árbol de componentes con el contexto */ }
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/favoritos" element={ <Favoritos /> } />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
