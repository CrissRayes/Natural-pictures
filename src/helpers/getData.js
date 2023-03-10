const getData = async () => {
  const url = 'http://localhost:3000/fotos.json'
  const response = await fetch( url )
  const data = await response.json()
  const photos = data.photos
  const images = photos.map( photo => (
    {
      id: photo.id,
      alt: photo.alt,
      src: photo.src.large,
    } ) )

  return images
}

export default getData