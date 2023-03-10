import Heart from "./Heart"

const Card = ( { id, src, alt, liked, handleFavorites } ) => {


  return (
    <div
      className='foto'
      style={ { backgroundImage: `url(${src})` } }
      onClick={ () => handleFavorites( id ) }

    >
      <Heart
        filled={ liked }
      />
      <span>{ alt }</span>
    </div >
  )
}

export default Card
