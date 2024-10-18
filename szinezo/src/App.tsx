import { useEffect, useState } from "react"
import DessertCard from "./components/DessertCard"
import { DessertCardProp } from "./components/DessertCard"


function App() {
  const[desserts, setDesserts] = useState<DessertCardProp[]>([])


useEffect(()=>{fetch("data.json").then(res=>res.json()).then(fetchDessert=>setDesserts(fetchDessert))},[desserts])

  return (
    <>
    <section className="desserts">
{desserts.map(dessert=><DessertCard{...dessert}/>)}

</section>







  {/* <DessertCard image={{desktop:"./assets/images/image-waffle-desktop.jpg"}}
  name="Waffle with Berries"
  category="Waffle"
  price={6.5}></DessertCard> */}
    
    </>
  )
}

export default App
