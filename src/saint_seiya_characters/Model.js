import { useParams } from "react-router-dom"

export default function Model() {
  const {characters}=useParams();
  return (
      <div>
      <img className="mb-4" src={`https://img-12.stickers.cloud/packs/be90c707-3de3-4a0b-853a-24be4f86ea6a/webp/${characters}.webp`} alt={characters} />
      <figcaption className="fs-3 text-light">{characters}</figcaption>
    </div>

  )
}
