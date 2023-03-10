import { useContext } from 'react'
import MyContext from '../my_context'
import Card from '../components/Card'


export default function Favoritos () {

  const { favorites } = useContext( MyContext )

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        { favorites.map( image => (
          <Card
            key={ image.id }
            // { ...image }
            id={ image.id }
            src={ image.src }
            alt={ image.alt }
            liked={ true }
          /> ) ) }
      </div>
    </div>
  );
}
