import { Link } from "react-router-dom"

export default function Home() {
    const list=["Phoenix_Ikki", "Andromeda_Shun", "Cygnus_Hyoga", "Dragon_Shiryu", "Pegasus_Seiya", 
               "Athenea_Saori_Kiddo", "Aries_Mu", "Taurus_Aldebaran", "Gemini_Saga", "Leo_Aiolia", "Cancer_Deathmask", 
               "Scorpio_Milo", "Virgo_Shaka", "Capricorn_Shura", "Libra_Dohko", "Pisces_Aphrodite", 
               "Pegasus_Armor", "Dragon_Armor", "Cygnus_Armor", "Andromeda_Armor", "Phoenix_Armor", "Athenea_Armor",
               "Aries_Armor", "Taurus_Armor", "Gemini_Armor", "Cancer_Armor", "Leo_Armor", 
               "Capricorn_Armor", "Sagittarius_Armor", "Libra_Armor", "Virgo_Armor", "Acuarius_Armor", "Pisces_Armor"]
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center w-100 characters_grid">
        {
        list.map(character=>
            <Link to={`/react-single-page-application/build/saint_seiya_characters/${character}`}>
            <img className="w-50 mb-5 border border-4 rounded-5 border-danger bg-whitesmoke" alt={character} src={`https://raw.githubusercontent.com/Druvamayor/react-single-page-application/main/src/saint_seiya_characters/assets/${character}.webp`} />
            </Link>)    
        }

    </div>
  )
}
