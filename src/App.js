import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <Saludo persona="juan" edad={30}/>
      <Saludo persona="antonio"/>
      <hr/>
      <h3>Cajita de comentario</h3>
      <Comentario
      urlImagen='https://picsum.photos/200'
      persona='Juan'
      texto='Lorem amet consectetur adipisicing elit. Sint possimus alias atque sapiente eius, ad excepturi odio obcaecati harum rem beatae, necessitatibus fugiat iste aspernatur facere, iusto sit? Nesciunt, aliquam.      '
      />
      <Comentario
      urlImagen='https://picsum.photos/200'
      persona='Hann'
      texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus alias atque sapiente eius, ad excepturi odio obcaecati harum rem beatae, necessitatibus fugiat iste aspernatur facere, iusto sit? Nesciunt, aliquam.      '

      />
      
    </div>
  );
}

export default App;
