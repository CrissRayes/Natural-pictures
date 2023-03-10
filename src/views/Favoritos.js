import { useContext } from 'react'
import CardFavorites from '../components/CardFavorites';
import MyContext from '../my_context'


export default function Favoritos () {

  // Obtiene el estado de favoritos desde el contexto
  const { favorites } = useContext( MyContext )

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {/* Itera sobre el array de favoritos y renderiza un CardFavorites por cada imagen */ }
        { favorites.map( image => (
          <CardFavorites
            key={ image.id }
            id={ image.id }
            src={ image.src }
            alt={ image.alt }
          // liked={ true } // No es necesario pasar esta prop porque el corazón no se va a pintar
          /> ) ) }
      </div>
    </div>
  );
}
