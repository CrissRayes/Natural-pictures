import Heart from "./Heart";
const Card = ( { id, src, alt, liked } ) => {
  return (
    <div
      className='card mb-4 shadow-sm mx-auto'
      style={ { width: '18rem' } }
    >
      <Heart />
      <img
        className='card-img-top'
        src={ src }
        alt={ alt }
        style={ { height: '10rem' } }
      />
      <div className='card-body'>
        <h5 className='card-title'>{ alt }</h5>
      </div>
    </div>
  )
}

export default Card
