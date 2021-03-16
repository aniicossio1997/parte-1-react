import React from 'react'

const Saludo = (props) => {
  //console.log(props)
  return (
    <div>
      <h2>Saluda component Saludo ha: {props.persona}</h2>
      <p>with: {props.edad}</p>
    </div>
  )
}

export default Saludo
