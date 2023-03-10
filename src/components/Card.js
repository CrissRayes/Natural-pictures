import Heart from "./Heart"
import { useState, useContext, useEffect } from 'react'
import MyContext from '../my_context'

const Card = ( { id, src, alt } ) => {

  const { favorites, setFavorites } = useContext( MyContext )
  const [isLiked, setIsLiked] = useState( false )

  const handleFavorite = () => {
    handleLike()
    addFavorite()
  }

  const handleLike = () => {
    isLiked ? setIsLiked( false ) : setIsLiked( true )
  }

  const addFavorite = () => {
    const newFavorite = { id, src, alt }
    // si el id del favorito ya existe, no lo agregamos, sino, lo agregamos a favoritos
    const isFavorite = favorites.some( favorite => favorite.id === id )
    if ( !isFavorite ) {
      setFavorites( [...favorites, newFavorite] )
    } else {
      const newFavorites = favorites.filter( favorite => favorite.id !== id )
      setFavorites( newFavorites )
    }
  }

  return (
    <div
      className='foto'
      style={ { backgroundImage: `url(${src})` } }
      onClick={ handleFavorite }
    >
      <Heart
        filled={ isLiked }
      />
      <span>{ alt }</span>
    </div >
  )
}

export default Card
