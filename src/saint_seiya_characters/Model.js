import { useParams } from "react-router-dom"

export default function Model() {
  const {characters}=useParams();
  return (
      <div className='m-4'>
      <img className="img-fluid mb-4 border border-5 rounded-6 border-danger bg-whitesmoke" src={`https://raw.githubusercontent.com/Druvamayor/react-single-page-application/main/src/saint_seiya_characters/assets/${characters}.webp`} alt={characters} />
      <figcaption id="Namecharacter" className="fs-3 fw-bold text-light">{characters}</figcaption>
    </div>

  )
}
