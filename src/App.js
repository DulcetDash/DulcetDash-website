import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Privacy from "./Component/Privacy";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
