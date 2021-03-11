import React from 'react'

const Formulario = () => {
  const [fruta, setFruta] = React.useState('')
  const [description, setDescription] =React.useState('')
  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <input 
        type="text"
        placeholder="Ingrese nombre"
        className="form-control mb-2"
        />
        <textarea
        placeholder="Ingrese description"
        className="form-control mb-2"
        ></textarea>
        <button className="btn btn-primary btn-block">Agregar</button>
      </form>
    </div>
  )
}

export default Formulario
