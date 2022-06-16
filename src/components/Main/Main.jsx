import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import './Main.scss'

const Main = () => {
  const {news, getNews} = useContext(GlobalContext);
  useEffect(()=>{
    getNews();
  },[])

  let printAside = []
  let printMain =[]

  news.forEach((element,i) =>{
    if(i>=9){
      const asideArticle = (
        <div className="Main__Article--aside">
          {element.media.length !== 0?<img src={element.media[0]['media-metadata'][(element.media[0]['media-metadata'].length - 1)].url} alt="" />:null}
          <div>
            <h2>{element.title}</h2>
            <a href={element.url} target="_blank" rel="noreferrer">Read more</a>
          </div>
        </div>
      )
      return (
        printAside.push(asideArticle)
      )
    }else{
      const mainArticle = (
        <div className="Main__Article" key={element.id}>
        {element.media.length !== 0?<img src={element.media[0]['media-metadata'][(element.media[0]['media-metadata'].length - 1)].url} alt="" />:null}
        <div className="Article__Text">          
          <h2>{element.title}</h2>
          <p>{element.abstract}</p>
        </div>
        <div className="Article__InfoAndLink">
          <div className="Article__Info">
            {element['geo_facet'][0]?<p className="Info__Location">{element['geo_facet'][0]}</p>:null}
            <p className="Info__Date">{element.published_date}</p>
          </div>
            <a href={element.url} target="_blank" rel="noreferrer">Read more</a>
        </div>
      </div>
      )
      return printMain.push(mainArticle)
    }
  })

  return (
    <section className="Main">
        <div className="Main__Main">
          {printMain}
        </div>
        <div className="Main__Aside">
          {printAside}
        </div>
    </section>
  )
}

export default Main