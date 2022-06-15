import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import isEmail from "validator/lib/isEmail"

const NewNews = () => {

  let navigate = useNavigate()

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [alerter, setAlerter] = useState("")

    useEffect(()=>{
        setTimeout(() => {
            setAlerter("")
        }, 5000);
    },[alerter])

    const initialState = {
      name:"",
      email:"",
      location:"",
      title:"",
      body:""
    }

    const [data,setData]=useState(initialState)


    const handleInputChange =({target})=>{
        setData({
            ...data,
            [target.name]:target.value
        })
        if(data.name && data.email && data.location && data.title && data.body){
            setBtnDisabled(false)
        } else{
            setBtnDisabled(true)
        }
    }

    const uploadForm = (e) => {
        e.preventDefault();
        if(!data.name || !data.email || !data.location || !data.title || !data.body){
            return setAlerter("Rellena todos los campos")
        }
        if(data.name.length < 3){
            return setAlerter("El nombre es demasiado corto")
        }
        if(!isEmail(data.email)){
          return setAlerter("Introduce un email valido")
        }
        if(data.location.length <3){
          return setAlerter("La localizacion es demasiado corta")
        }
        if(data.title.length < 12){
            return setAlerter("El titulo es demasiado corto");
        }
        if(data.body.length < 30){
          return setAlerter('El body es demasiado corto')
        }
        setAlerter("Noticia creada")
        setTimeout(() => {
            navigate("/")
        }, 5000);
        if(!localStorage.forms){
            localStorage.forms = JSON.stringify([data])
        } else{
            let tmp = JSON.parse(localStorage.forms)
            tmp.push(data)
            localStorage.forms = JSON.stringify(tmp)
        }
    }

  return (
    <section className="NewNews">
        <form onSubmit={uploadForm}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Tu nombre" onChange={handleInputChange}/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={handleInputChange}/>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" onChange={handleInputChange} />
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleInputChange} />
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" onChange={handleInputChange}></textarea>
            <button type="submit" disabled={btnDisabled} >Enviar</button>
        </form>
        {(alerter === "")?null:<p className="alerter">{alerter}</p>}
    </section>
  )
}

export default NewNews