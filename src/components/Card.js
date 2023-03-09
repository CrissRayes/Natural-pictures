import Heart from "./Heart";

/*
todo: agregar un estado para saber si la imagen esta likeada o no
todo: poner heart sobre la imagen
todo: cambiar color de heart si la imagen esta likeada
todo: corregir tamaño de la imagen
todo: poner texto sobre la imagen

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
