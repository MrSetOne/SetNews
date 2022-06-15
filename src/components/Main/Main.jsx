import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"

const Main = () => {
  const {news, getNews} = useContext(GlobalContext);
  useEffect(()=>{
    getNews();
  },[])
  console.log(news);
  const print = news.map(element =>{
    return(
      <div>
        {element.media.length !== 0?<img src={element.media[0]['media-metadata'][(element.media[0]['media-metadata'].length - 1)].url} alt="" />:null}
        <h2>{element.title}</h2>
        <p>{element.abstract}</p>
        {console.log(element)} 
        {element['geo_facet'][0]?<p>{element['geo_facet'][0]}</p>:null}
        <a href={element.url} target="_blank" rel="noreferrer">Mas info</a>
        
      </div>
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