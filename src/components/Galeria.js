import "../assets/css/galeria.css"
import Card from './Card'
import useData from '../hooks/useData'
import { useContext } from 'react'
import MyContext from '../my_context'

export default function Home () {
  const { data } = useData()
  const { favorites } = useContext( MyContext )

  return (
    <div className="galeria grid-columns-5 p-3">
      { data.map( image => (
        <Card
          key={ image.id }
          id={ image.id }
          src={ image.src }
          alt={ image.alt }
          liked={ favorites.some( favorite => favorite.id === image.id ) }

        />
      ) ) }
    </div>
  )
} 
