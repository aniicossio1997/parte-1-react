import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Usuarios from "./components/Usuarios";

function App() {
  return (
    <Router>
      <div className="container mt-5">
      <div className="btn-group">
          <Link to="/contacto" className="btn btn-dark">Contacto</Link>
          <Link to="/nosotros" className="btn btn-dark">Nosotros</Link>
          <Link to="/usuarios" className="btn btn-dark">Usuarios</Link>
          <NavLink to="/" className="btn btn-dark" activeClassName="active">Inicio</NavLink>
      </div>
        <hr/>
        <Switch>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/usuarios">
            <Usuarios/>
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
