import { useParams } from "react-router-dom"

export default function Model() {
  const {characters}=useParams();
  return (
      <div className='m-4'>
      <img className="img-fluid mb-4 border border-5 rounded-6 border-danger bg-whitesmoke" src={`https://img-12.stickers.cloud/packs/be90c707-3de3-4a0b-853a-24be4f86ea6a/webp/${characters}.webp`} alt={characters} />
      <figcaption id="Namecharacter" className="fs-3 fw-bold text-light">{characters}</figcaption>
    </div>

  )
}
