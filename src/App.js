import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="App">
      <Saludo persona="juan" edad={30}/>
      <Saludo persona="antonio"/>

    </div>
  );
}

export default App;
