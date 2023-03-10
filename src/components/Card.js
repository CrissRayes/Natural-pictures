import Heart from "./Heart"
import { useContext, useState } from 'react'
import MyContext from '../my_context'

const Card = ( { id, src, alt, liked } ) => {

  const { favorites, setFavorites } = useContext( MyContext )
  const [isLiked, setIsLiked] = useState( false )

  const handleLiked = () => {

    if ( !isLiked ) {
      setIsLiked( true )
      setFavorites( [...favorites, { id, src, alt, liked }] )
    } else {
      setIsLiked( false )
      setFavorites( favorites.filter( favorite => favorite.id !== id ) )
    }

  }

  return (
    <div
      className='foto'
      style={ { backgroundImage: `url(${src})` } }
      onClick={ handleLiked }
    >
      <Heart
        filled={ liked }
      />
      <span>{ alt }</span>
    </div >
  )
}

export default Card
