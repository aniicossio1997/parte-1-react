import React from 'react'

const Formulario = () => {
  const [fruta, setFruta] = React.useState('')
  const [description, setDescription] =React.useState('')
  const [lista, setLista] = React.useState([])


  const guardarDatos = (e) => {
    e.preventDefault()
    if(!fruta.trim()){
      console.log('El campo del nombre se encuentra vacio')
      return
    }
    if(!description.trim()){
      console.log("La description esta vacia")
      return
    }
    console.log(`Datos procesados: ${fruta} ${description}` )
    setLista([
      ...lista,
      {fruta: fruta, description: description}
    ])
    e.target.reset()
    setFruta('')
    setDescription('')
    

  }
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={ guardarDatos}>
        <input 
        type="text"
        placeholder="Ingrese nombre"
        className="form-control mb-2"
        onChange={ e => setFruta(e.target.value)}

        />
        <textarea
        placeholder="Ingrese description"
        className="form-control mb-2"
        onChange={ e => setDescription(e.target.value)}
        ></textarea>
        <button className="btn btn-primary btn-block">Agregar</button>
      </form>

      <ul>
        {
          lista.map((item, index) =>(
            <li key={index}>
              {item.fruta} - {item.description}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Formulario
