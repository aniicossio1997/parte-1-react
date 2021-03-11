import { useState } from "react"

const Listas = () => {
  //const estadoInicial = [1,2,3,4,5]
  const objectInicial = [
    {id:1, texto:'tarea 1'},
    {id:2, texto:'tarea 2'},
    {id:3, texto:'tarea 3'},
    {id:4, texto:'tarea 4'},
  ]
  const [lista,setLista] = useState(objectInicial)

  // const arrayUno =['Chile','Argentina']
  // const arrayDos =['Peru','Mexico']

  // const unidos = [...arrayUno,...arrayDos]
  // console.log(unidos)
  const agregarElemento = () =>{
    console.log("add element list")
    setLista([
      ...lista,
      {id:5, texto:'other'}
    ])
  }
  return(
    <div>
      <h2>Listas</h2>
      {
        lista.map((item,index) => (
          <h4 key={index}>{item.texto}</h4>
        ))
      }
      <button onClick={() => agregarElemento()}>add </button>
    </div>
  )
}

export default Listas
