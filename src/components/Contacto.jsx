import React,{ useState, useEffect} from 'react';
const Contacto = () => {
  const [count, setcount] = useState(0);
  useEffect(() =>{
    document.title = `You clicked ${count} times`; 
    });

  return (
    <div>
      <h1>Contacto</h1>
      <p>You clicked {count} times</p>
      <button 
      className="btn btn-primary"
      onClick={() => setcount(count + 1)}
      > Click me</button>
    </div>
  )
}

export default Contacto

