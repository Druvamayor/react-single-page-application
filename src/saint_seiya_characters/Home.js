import { Link } from "react-router-dom"

export default function Home() {
    const list=["cc22e0ed-b9b6-4316-9d21-fc19d1522121", "33e3db64-0078-4dc1-b600-e9be8fae03db", "09eba5c7-4a83-47c1-ba6a-b45c79a2884c", "e0796c8e-228e-47c6-8296-3b52130d804a", "5e0790a3-98f3-4c14-a1d5-ca45e9ee609f", 
               "d66aabec-8c5c-4336-922d-3978cc3fe384", "Athenea_Saori_Kiddo", "6bedd3a9-9b6b-45dd-8c94-f2036719b913", "c0c0842d-3e02-41ad-873e-0918b71a8d58", "7beff614-a2ef-4164-8628-fa36c3a1f38e", "b592f640-12ba-4bca-b565-9b05d7311686", 
               "45c5a181-c6f4-4205-9941-9a03b2bf20f8", "59003ae3-7ea9-4b81-a394-6e9ab7585137", "4d510407-65bd-406b-b51e-fae4a7c6ff28",
               
               "Pegaus_Armor", "45d662ef-4f35-4272-a283-936d6f00b132", "e5b0d6d1-f8e7-4bb3-b812-04b9add99c9e", "Andromeda_Armor", "df061d3f-0a8c-4c61-bcb9-a7d3633ce085", 
               "bd9adc6d-8275-42fa-a512-5346bac583f0", "21b9c467-90cc-4e6e-a7e5-438a8f217665", "304bc87c-7e11-43de-929a-0d4832305d1b", "7d8a5fcf-166d-4f8a-bc3d-4ec3d277d7c2", "4a8d3917-dc2c-4bc5-9c62-c7b7cd8723aa", 
               "1411ed14-c897-47a5-b97b-c4c70f6e518a", "dfc0fd89-c8c0-4a15-96f6-920423bb103c", "830d72ec-b97f-4ffa-a6b9-ba5a930ab8f9", "5e76f499-8eab-43a2-9a3a-1c53dcc4e5db", "ada4d48e-fe4b-489d-a134-547d578ab564", "824f3d15-9b97-4c2c-b08a-e243ef0c97dc", 
               "94846abb-dd0a-4fc3-9f98-a92bff2bda56", "Capricorn_Shura", "Libra_Dohko", "Scorpio_Milo", "Pisces_Aphrodite", "Virgo_Shaka"]
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
