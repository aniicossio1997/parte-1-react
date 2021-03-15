import React from "react";
import shortid from 'shortid';
function App() {
  const[tarea,setTarea]= React.useState('')
  const[tareas,setTareas]=React.useState([])
  const[modoEdit,setModoEdit]=React.useState(false)
  const [id, setId] = React.useState('')
  const [error,setError] = React.useState(null)


  const agregarTarea = e =>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("Complete el nombre de la tarea")
      setError("[ERROR:] complete el campo")

      return
    }
    console.log(tarea)
    setTareas([
      ...tareas,
      {id:shortid.generate(),tarea:tarea}
    ])
    setTarea('')
    setError(null)
  }
  const eliminar = id =>{
    //console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }
  const edit = item =>{
    //console.log(item)
    setModoEdit(true)
    setTarea(item.tarea)
    setId(item.id)
    
  }
  const editTarea = e  =>{
    e.preventDefault()
    //console.log(e)
    if(!tarea.trim()){
      console.log("no se puede editar con el campo vacio")
      setError("[ERROR:] complete el campo")
      return
    }
    const arrayEdit = tareas.map(item => item.id === id ? {id, tarea } : item)
    setTareas(arrayEdit)
    setTarea('')
    setModoEdit(false)
    setId('')
    setError(null)
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
             tareas.length===0 ? ( 
               <li className="list-group-item">No hay tareas</li>
             ) : (
             
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
                 className="btn btn-warning btn-sm float-end"
                 onClick={() => edit(item)}
                 >
                 Edit
                 </button>
                </li>
                ))
              
   
             )
           }
           

         </ul>
       </div>
       <div className="col-4">
         <h4 className="text-center">
            {
              modoEdit ? 'Editar tarea' : 'Agregar tarea'
            }
         </h4>
         <form onSubmit={modoEdit ? editTarea : agregarTarea}>
           {
             error ? <span className="text-danger">{error}</span> : null
           }
           <input
           type="text"
           className="form-control mb-2"
           placeholder="Ingrese el nombre"
           onChange={e => setTarea(e.target.value)}
           value={tarea}
           />
           <div className="d-grid gap-2">
           {
              modoEdit ? (
                <button className="btn btn-warning btn-block" type="submit">Editar</button>
              ) : (
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
              )
            }
           </div>
         </form>
       </div>
     </div>

 </div>
  );
}

export default App;
