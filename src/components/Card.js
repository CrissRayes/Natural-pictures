import Heart from "./Heart";

/*
todo: agregar un estado para cambiar color de like

*/
const Card = ( { id, src, alt, liked } ) => {
  return (
    <div
      className='foto'
      style={ { backgroundImage: `url(${src})` } }
    >
      <Heart
        filled={ true }
      />
      <span>{ alt }</span>
    </div >
  )
}

export default Card
