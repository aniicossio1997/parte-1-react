import React from 'react'

const Usuarios = () => {

  const [equipo, setEquipo] = React.useState([])
  React.useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
    //console.log(equipo)
  },[])
  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    setEquipo(users)
  }
  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
      {
        equipo.map(item => (
          <li key={item.id}>{item.name} - {item.email}</li>
        ))

      }
      </ul>
    </div>
  )
}

export default Usuarios
