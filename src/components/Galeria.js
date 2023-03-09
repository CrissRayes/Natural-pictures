import "../assets/css/galeria.css"
import Card from './Card'
import useData from '../hooks/useData'

export default function Home () {
  const { data } = useData()

  return (
    <div className="galeria grid-columns-5 p-3">
      { data.map( image => (
        <Card
          key={ image.id }
          { ...image }
        />
      ) ) }
    </div>
  )
} 
