import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"

const Main = () => {
  const {news, getNews} = useContext(GlobalContext);
  useEffect(()=>{
    getNews();
  },[])

  const print = news.map(elment =>{
    return(
      <h2>{elment.title}</h2>
    )
  })




  return (
    <section className="Main">
        <h1>Soy el Main</h1>
        {print}
    </section>
  )
}

export default Main