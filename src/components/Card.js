import Heart from "./Heart"
import { useState, useContext } from 'react'
import MyContext from '../my_context'

const Card = ( { id, src, alt, liked } ) => {
  const { favorites, setFavorites } = useContext( MyContext )
  const [isLiked, setIsLiked] = useState( false )

  const addFavorite = () => {
    if ( isLiked ) {
      setIsLiked( false )
      //   setFavorites( favorites.filter( favorite => favorite.id !== id ) )
    } else {
      setIsLiked( true )
      //   setFavorites( [ ...favorites, { id, src, alt } ] )
    }
  }

  return (
    <div
      className='foto'
      style={ { backgroundImage: `url(${src})` } }
      onClick={ addFavorite }
    >
      <Heart
        filled={ isLiked }
      />
      <span>{ alt }</span>
    </div >
  )
}

export default Card
