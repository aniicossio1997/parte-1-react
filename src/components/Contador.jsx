import React, { useState } from 'react';

const Contador = () => { 
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h4>
        {
          count > 2 ? 'Es mayor a dos' : 'Es menor a dos'
        }
      </h4>
    </div>
  );
}
export default Contador;
