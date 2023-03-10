import "../assets/css/galeria.css"
import Card from './Card'
import useData from '../hooks/useData'
import { useContext } from 'react'
import MyContext from '../my_context'

export default function Home () {
  // Obtiene los datos de la API y los guarda en el estado favorites
  const { data } = useData()
  const { favorites, setFavorites } = useContext( MyContext )

  // Maneja el estado de favoritos, si ya existe lo elimina, si no existe lo agrega
  const handleFavorites = ( id ) => {
    const newFavorites = favorites.some( favorite => favorite.id === id )
      ? favorites.filter( favorite => favorite.id !== id )
      : [...favorites, data.find( image => image.id === id )]

    setFavorites( newFavorites ) // Actualiza el estado de favoritos, asignando el nuevo array a favorites
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      { data.map( image => (
        <Card
          key={ image.id }
          id={ image.id }
          src={ image.src }
          alt={ image.alt }
          liked={ favorites.some( favorite => favorite.id === image.id ) } // Si el id de la imagen actual existe en el array de favoritos, retorna true, de lo contrario retorna false. Esta prop se pasa al componente Card para que sepa si debe pintar el corazón lleno o vacío
          handleFavorites={ handleFavorites }

        />
      ) ) }
    </div>
  )
} 
