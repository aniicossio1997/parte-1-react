import React, { useState } from 'react';

const Eventos = () => {
  const [ texto, setTexto] = useState('soy texto de estado');

  const eventoClick = () => {
    console.log('me diste un click')
    setTexto("cambiando")
  }
  return (
    <>
      <hr/>
      <h3>{ texto }</h3>
      <button onClick={ () => eventoClick()}>Click</button>
    </>
  )
}

export default Eventos
