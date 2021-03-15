import React from "react";
import shortid from 'shortid';
function App() {
  const[tarea,setTarea]= React.useState('')
  const[tareas,setTareas]=React.useState([])

  const agregarTarea = e =>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("Complete el nombre de la tarea")
      return
    }
    console.log(tarea)
    setTareas([
      ...tareas,
      {id:shortid.generate(),tarea:tarea}
    ])
    setTarea('')
  }
  const eliminar = id =>{
    //console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }

  return (
    <div className="container mt-5">
     <h1 className="text-center"> CRUD SIMPLE</h1>
     <div className="row">
       <div className="col-8">
         <h4 className="text-center">
         Listado de tareas
         </h4>
         <ul className="list-group">
           {
             tareas.map(item =>(
              <li className="list-group-item" key={item.id}>
              <span className=" fw-lighter text-muted">
              {item.tarea}
              </span>
              <button
              className="btn btn-danger btn-sm float-end mx-2"
              onClick={ () => eliminar(item.id)}
              >
              Eliminar
              </button>
              <button
              className="btn btn-warning btn-sm float-end">
              Edit
              </button>
             </li>
             ))
           }


         </ul>
       </div>
       <div className="col-4">
         <h4 className="text-center">
          Formulario
         </h4>
         <form onSubmit={ agregarTarea}>
           <input
           type="text"
           className="form-control mb-2"
           placeholder="Ingrese el nombre"
           onChange={e => setTarea(e.target.value)}
           value={tarea}
           />
           <div className="d-grid gap-2">
            <button className="btn btn-dark" type="submit">Add</button>
           </div>
         </form>
       </div>
     </div>

 </div>
  );
}

export default App;
